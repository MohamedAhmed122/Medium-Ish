import {useMutation} from '@apollo/client';
import {currentAuthor} from '@GraphQL/Apollo/cache';
import {INITIATE_AUTHOR} from '../query';

import {InitiateAuthorParams, InitiateAuthor, Navigation} from '../types';
import {AuthParams} from '@Navigation/auth-stack/interface';
import {errorHandler} from '@Utils/errorHandler';

export const useInitiateAuthor = (navigation: Navigation) => {
  const [registerUser, {loading, data, error}] = useMutation<
    {createAuthor: InitiateAuthor},
    InitiateAuthorParams
  >(INITIATE_AUTHOR, {
    errorPolicy: 'ignore',
    onError: ({networkError}) => {
      errorHandler(networkError);
    },
    onCompleted: author => {
      console.log('YES');
      currentAuthor({
        id: author.createAuthor.id,
        name: author.createAuthor.name,
        username: author.createAuthor.username,
      });
      navigation.navigate(AuthParams.UserAvatar);
    },
  });
  return {registerUser, loading, data, error};
};
