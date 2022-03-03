/* eslint-disable curly */
import React from 'react';
// TYPES
import {Navigators} from '@Navigation/index';

// GRAPHQL
import {
  useGetAuthors,
  useGetArticles,
  Article,
  useLikeArticle,
} from '@GraphQL/requests';
import {watchListVar} from '@GraphQL/Apollo/cache';
// SOUND
import {playSong} from '@Utils/playSound';
import {useMediaPlayer} from '@Hooks/useMediaPlayer';

import {Error, AppLoading, Empty} from '@Commons/index';
import {watchListResolver} from '@Utils/watchListReslover';
import {ArticlesView} from './components/View';
import {RootNavigation} from '@Navigation/app-navigation/interface';

interface ArticleProps {
  navigation: RootNavigation;
}

export const ArticlesScreen: React.FC<ArticleProps> = ({navigation}) => {
  const {authorLoading, authors, authorError} = useGetAuthors();

  const {articles, articleError, articleLoading, refetch} = useGetArticles();

  const {likeOrDisLikeArticle, likes, likeLoading} = useLikeArticle();
  console.log(likes, likeLoading);

  useMediaPlayer();

  const handleNavigate = (id: string): void => {
    navigation.navigate(Navigators.Tab.Article, {
      screen: Navigators.ArticleStack.ArticleDetail,
      params: {id},
    });
  };

  const handleNavigateToProfile = (id: string, username: string) =>
    navigation.navigate(Navigators.App.AuthorArticles, {id, username});

  const handleWatchListItems = (item: Article): void =>
    watchListVar && watchListResolver(watchListVar, item);

  const onRefresh = () => {
    playSong();
    refetch();
  };

  if (articleLoading) return <AppLoading />;
  if (!authors || authorError) return <Empty />;
  if (articleError || !articles) return <Error />;

  return (
    <ArticlesView
      onRefresh={onRefresh}
      handleWatchListItems={handleWatchListItems}
      handleNavigateToProfile={handleNavigateToProfile}
      articles={articles}
      authors={authors}
      authorLoading={authorLoading}
      articleLoading={articleLoading}
      handleNavigate={handleNavigate}
      likeOrDisLikeArticle={likeOrDisLikeArticle}
    />
  );
};
