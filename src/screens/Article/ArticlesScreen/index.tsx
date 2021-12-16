/* eslint-disable curly */
import React from 'react';
// TYPES
import {Navigators} from '@Navigation/index';
import {StackNavigationProp} from '@react-navigation/stack';
import {TabParamList, TabParams} from '@Navigation/tab-navigation/interface';

// GRAPHQL
import {useGetAuthors, useGetArticles, Article} from '@GraphQL/requests';
import {watchListVar} from '@GraphQL/Apollo/cache';
// SOUND
import {playSong} from '@Utils/playSound';
import {useMediaPlayer} from '@Hooks/useMediaPlayer';

import {Error, AppLoading, Empty} from '@Commons/index';
import {watchListResolver} from '@Utils/watchListReslover';
import {ArticlesView} from './components/View';

interface ArticleProps {
  navigation: StackNavigationProp<TabParamList, TabParams>;
}

export const ArticlesScreen: React.FC<ArticleProps> = ({navigation}) => {
  const {authorLoading, authors} = useGetAuthors();

  const {articles, articleError, articleLoading, refetch} = useGetArticles();

  useMediaPlayer();

  const handleNavigate = (id: string): void => {
    navigation.navigate(Navigators.Tab.Article, {
      screen: Navigators.ArticleStack.ArticleDetail,
      params: {id},
    });
  };

  const handleNavigateToProfile = (id: string) => {
    navigation.navigate(Navigators.Tab.Author, {
      screen: Navigators.AuthorStack.AuthorProfile,
      params: {id},
    });
  };
  const handleWatchListItems = (item: Article): void =>
    watchListVar && watchListResolver(watchListVar, item);

  const onRefresh = () => {
    playSong();
    refetch();
  };

  if (articleLoading) return <AppLoading />;
  if (!authors) return <Empty message="" />;
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
    />
  );
};
