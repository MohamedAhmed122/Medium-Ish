/* eslint-disable curly */
import React from 'react';

import {useReactiveVar} from '@apollo/client';
import {currentAuthor} from '@GraphQL/Apollo/cache';
import {useGetAuthor} from '@GraphQL/query';

import {ScrollView} from 'react-native';
import {Header, RowContainer} from './components';
import {Error, AppLoading} from '@Commons/index';
import {authorInfo} from '@Assets/data';
import {UserOptions} from '@Types/UserList';
import {RootNavigation} from '@Navigation/app-navigation/interface';
import {Navigators} from '@Navigation/index';

interface AuthorProfileProps {
  navigation: RootNavigation;
}

export const AuthorProfile: React.FC<AuthorProfileProps> = ({navigation}) => {
  const currentUser = useReactiveVar(currentAuthor);
  const {author, loading, error} = useGetAuthor(currentUser?.id);

  const handlePress = (type: UserOptions) => {
    switch (type) {
      case UserOptions.Logout:
        return userLogout();
      default:
        return;
    }
  };

  const userLogout = () => {
    navigation.navigate(Navigators.App.Welcome);
    currentAuthor(null);
  };

  if (loading) return <AppLoading />;
  if (error || !author) return <Error />;

  return (
    <ScrollView>
      <Header author={author.author} />
      <RowContainer
        author={author.author}
        items={authorInfo}
        onPress={handlePress}
      />
    </ScrollView>
  );
};
