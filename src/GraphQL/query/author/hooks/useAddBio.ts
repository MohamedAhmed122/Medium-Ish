import {useMutation} from '@apollo/client';
// import {currentAuthor} from '@GraphQL/Apollo/cache';
import {UPDATE_AUTHOR_INFO} from '../query';

import {UpdateAuthorInfoParams, AuthorBio} from '../types';
import {Navigators} from '@Navigation/index';
import {RootNavigation} from '@Navigation/AppNavigation/interface';

export const useAddBio = (navigation: RootNavigation) => {
  const [addBio, {loading}] = useMutation<
    {updateAuthor: AuthorBio},
    UpdateAuthorInfoParams
  >(UPDATE_AUTHOR_INFO, {
    onError: err => {
      console.log(err);
    },
    onCompleted: () => {
      console.log('YES');
      navigation.reset({
        index: 0,
        routes: [{name: Navigators.App.TabNavigation}],
      });
    },
  });
  return {addBio, loading};
};
