import {useLazyQuery} from '@apollo/client';
import {Author} from '@GraphQL/query';
import {LOGIN_AUTHOR} from '@GraphQL/query';
import {currentAuthor} from '@GraphQL/Apollo/cache';

import {Navigators} from '@Navigation/index';
import {RootNavigation} from '@Navigation/AppNavigation/interface';

export const useLoginAuthor = (navigation: RootNavigation) => {
  const [loginAuthor, {loading, data, error}] = useLazyQuery<
    {author: Author},
    {username: string}
  >(LOGIN_AUTHOR, {
    onCompleted: author => {
      currentAuthor(author.author);
      navigation.reset({
        index: 0,
        routes: [{name: Navigators.App.TabNavigation}],
      });
    },
  });
  console.log(loading, data, error);
  return {loginAuthor, loading};
};
