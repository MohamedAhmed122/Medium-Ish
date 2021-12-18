import {useMutation} from '@apollo/client';
import {currentAuthor} from '@GraphQL/Apollo/cache';
import {INITIATE_AUTHOR} from '../query';

import {InitiateAuthorParams, InitiateAuthor} from '../types';
import {errorHandler} from '@Utils/errorHandler';

export const useInitiateAuthor = (onComplete: () => void) => {
  const [registerUser, {loading, data, error}] = useMutation<
    {createAuthor: InitiateAuthor},
    InitiateAuthorParams
  >(INITIATE_AUTHOR, {
    errorPolicy: 'ignore',
    fetchPolicy: 'no-cache',
    onError: errors => {
      errorHandler(errors);
    },
    onCompleted: (author: {createAuthor: InitiateAuthor}) => {
      console.log(author?.createAuthor.id, 'author?.createAuthor.id');
      console.log('YES');
      currentAuthor({
        id: author.createAuthor.id,
        name: author.createAuthor.name,
        username: author.createAuthor.username,
      });
      onComplete();
    },
  });
  return {registerUser, loading, data, error};
};
