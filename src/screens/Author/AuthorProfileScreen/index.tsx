/* eslint-disable curly */
import React from 'react';

import {TabParamList, TabParams} from '@Navigation/tab-navigation/interface';
import {Navigators} from '@Navigation/index';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import {useGetAuthor} from '@GraphQL/requests';

import {ViewAuthorProfile} from './components';
import {AppLoading} from '@Commons/index';
import {Nullable} from '@Types/Common';

interface AuthorProfileProps {
  openAuthorModal: boolean;
  ontoggleAuthorModal(): void;
  id: Nullable<string>;
}

export const AuthorProfileScreen: React.FC<AuthorProfileProps> = ({
  openAuthorModal,
  ontoggleAuthorModal,
  id,
}) => {
  const {loading, author} = useGetAuthor(id);
  const navigation =
    useNavigation<StackNavigationProp<TabParamList, TabParams>>();

  const onNavigateToArticleDetail = (articleId: string) => {
    navigation.navigate(Navigators.Tab.Article, {
      screen: Navigators.ArticleStack.ArticleDetail,
      params: {id: articleId},
    });
    ontoggleAuthorModal();
  };

  if (loading) return <AppLoading />;
  if (!author) return <></>;
  return (
    <ViewAuthorProfile
      onNavigateToArticleDetail={onNavigateToArticleDetail}
      author={author.author}
      openAuthorModal={openAuthorModal}
      onCloseModal={ontoggleAuthorModal}
    />
  );
};
