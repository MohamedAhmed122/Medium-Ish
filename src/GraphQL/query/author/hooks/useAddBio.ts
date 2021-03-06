import {useMutation} from '@apollo/client';
import {currentAuthor} from '@GraphQL/Apollo/cache';
import {UPDATE_AUTHOR_INFO} from '../query';

import {UpdateAuthorInfoParams, Author} from '../types';
import {Navigators} from '@Navigation/index';
import {RootNavigation} from '@Navigation/app-navigation/interface';
import {errorHandler} from '@Utils/errorHandler';

export const useAddBio = (navigation: RootNavigation) => {
  const [addBio, {loading}] = useMutation<
    {updateAuthor: Author},
    UpdateAuthorInfoParams
  >(UPDATE_AUTHOR_INFO, {
    onError: ({networkError}) => {
      errorHandler(networkError);
    },
    onCompleted: author => {
      currentAuthor(author.updateAuthor);
      navigation.reset({
        index: 0,
        routes: [{name: Navigators.App.TabNavigation}],
      });
    },
  });
  return {addBio, loading};
};
