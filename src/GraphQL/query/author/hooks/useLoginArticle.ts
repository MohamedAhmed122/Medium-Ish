import {useLazyQuery} from '@apollo/client';
import {Author} from '@GraphQL/query';
import {LOGIN_AUTHOR} from '@GraphQL/query';
import {currentAuthor} from '@GraphQL/Apollo/cache';

import {Navigators} from '@Navigation/index';
import {RootNavigation} from '@Navigation/app-navigation/interface';

import Toast from 'react-native-toast-message';

export const useLoginAuthor = (navigation: RootNavigation) => {
  const [loginAuthor, {loading, data, error}] = useLazyQuery<
    {author: Author},
    {username: string}
  >(LOGIN_AUTHOR, {
    onCompleted: author => {
      if (!author.author) {
        Toast.show({
          type: 'error',
          text1: 'Oops',
          text2: 'Unregistered User',
        });
      } else {
        currentAuthor(author.author);
        navigation.reset({
          index: 0,
          routes: [{name: Navigators.App.TabNavigation}],
        });
      }
    },
  });
  console.log(loading, data, error);
  return {loginAuthor, loading};
};
