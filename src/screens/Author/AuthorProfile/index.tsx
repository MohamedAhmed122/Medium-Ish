/* eslint-disable curly */
import React from 'react';

import {useReactiveVar} from '@apollo/client';
import {currentAuthor} from '@GraphQL/Apollo/cache';
import {useGetAuthor} from '@GraphQL/query';

import {shareProfile} from '@Utils/share';

import {AuthProfileView} from './components';
import {Error, AppLoading} from '@Commons/index';
import {authorInfo} from '@Assets/data';
import {UserOptions} from '@Types/UserList';
import {RootNavigation} from '@Navigation/app-navigation/interface';
import {Navigators} from '@Navigation/index';
import {AuthorParams} from '@Navigation/author-stack/interface';

import UserNotFound from '@Components/UserNotFound';

interface AuthorProfileProps {
  navigation: RootNavigation;
}

export const AuthorProfile: React.FC<AuthorProfileProps> = ({navigation}) => {
  const currentUser = useReactiveVar(currentAuthor);
  const {author, loading, error, refetch} = useGetAuthor(currentUser?.id);

  const userLogout = () => {
    navigation.navigate(Navigators.App.Welcome);
    setTimeout(() => {
      currentAuthor(null);
    }, 500);
  };

  const handleEdit = () =>
    navigation.navigate(AuthorParams.EditProfile, {
      author: author?.author,
    });

  console.log(author?.author, '--');
  const handlePress = (title: string) => {
    const type = title as UserOptions;
    switch (type) {
      case UserOptions.Logout:
        return userLogout();
      case UserOptions.Articles:
        return navigation.navigate(AuthorParams.AuthorArticles, {
          id: author?.author.id,
        });
      case UserOptions.Edit:
        return handleEdit();
      case UserOptions.Location:
        return navigation.navigate(AuthorParams.AuthorLocation);
      case UserOptions.Share:
        return shareProfile();
      default:
        return;
    }
  };

  if (!currentUser?.id) return <UserNotFound />;
  if (loading) return <AppLoading />;
  if (error || !author) return <Error />;

  return (
    <AuthProfileView
      header={{
        author: author.author,
        handleEdit,
        shareProfile,
      }}
      refetch={refetch}
      loading={loading}
      row={{
        items: authorInfo,
        onPress: handlePress,
        author: author.author,
      }}
    />
  );
};
