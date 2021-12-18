/* eslint-disable curly */
import React from 'react';

import {
  AuthorParamList,
  AuthorParams,
} from '@Navigation/author-stack/interface';
import {TabParamList, TabParams} from '@Navigation/tab-navigation/interface';
import {Navigators} from '@Navigation/index';
import {StackNavigationProp} from '@react-navigation/stack';

import {useGetAuthor} from '@GraphQL/requests';

import {ViewAuthorProfile} from './components';
import {AppLoading, Error} from '@Commons/index';
import {RouteProp} from '@react-navigation/native';

interface AuthorProfileProps {
  // route: RouteProp<AuthorParamList, AuthorParams.AuthorProfile>;
  // navigation: StackNavigationProp<TabParamList, TabParams>;
  openAuthorModal: boolean;
  ontoggleAuthorModal(): void;
  id: string;
}

export const AuthorProfileScreen: React.FC<AuthorProfileProps> = ({
  openAuthorModal,
  ontoggleAuthorModal,
  id,
}) => {
  const {loading, author, error} = useGetAuthor(id);

  const onNavigateToArticleDetail = (articleId: string) => {
    // navigation.navigate(Navigators.Tab.Article, {
    //   screen: Navigators.ArticleStack.ArticleDetail,
    //   params: {id: articleId},
    // });
  };
  const handleGoBack = () => {
    // navigation.goBack();
  };

  if (loading) return <AppLoading />;
  if (error || !author) return <Error />;

  return (
    <ViewAuthorProfile
      onNavigateToArticleDetail={onNavigateToArticleDetail}
      author={author.author}
      openAuthorModal={openAuthorModal}
      onCloseModal={ontoggleAuthorModal}
    />
  );
};
