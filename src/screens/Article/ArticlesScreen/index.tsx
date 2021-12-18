/* eslint-disable curly */
import React from 'react';
// TYPES
import {Navigators} from '@Navigation/index';
import {StackNavigationProp} from '@react-navigation/stack';
import {TabParamList, TabParams} from '@Navigation/tab-navigation/interface';

// GRAPHQL
import {
  useGetAuthors,
  useGetArticles,
  Article,
  useAddToWatchList,
} from '@GraphQL/requests';

// SOUND
import {playSong} from '@Utils/playSound';
import {useMediaPlayer} from '@Hooks/useMediaPlayer';

import {Error, AppLoading, Empty} from '@Commons/index';

import {ArticlesView} from './components/View';
import {useToggleButton} from '@Hooks/useToggle';

interface ArticleProps {
  navigation: StackNavigationProp<TabParamList, TabParams>;
}

export const ArticlesScreen: React.FC<ArticleProps> = ({navigation}) => {
  const {value: openAuthorModal, toggleButton} = useToggleButton(false);
  const {authorLoading, authors} = useGetAuthors();

  const {articles, articleError, articleLoading, refetch} = useGetArticles();

  const {addToWatchList} = useAddToWatchList();

  useMediaPlayer();

  const handleNavigate = (id: string): void => {
    navigation.navigate(Navigators.Tab.Article, {
      screen: Navigators.ArticleStack.ArticleDetail,
      params: {id},
    });
  };

  const handleWatchListItems = (item: Article): void => {
    addToWatchList({
      variables: {articleId: item.id},
    });
  };

  const onRefresh = () => {
    playSong();
    refetch();
  };

  if (articleLoading) return <AppLoading />;
  if (!authors) return <Empty message="" />;
  if (articleError || !articles) return <Error />;

  return (
    <>
      <ArticlesView
        articleProps={{
          handleNavigate,
          handleWatchListItems,
        }}
        userListProps={{
          onPress: toggleButton,
          openAuthorModal,
        }}
        onRefresh={onRefresh}
        articles={articles}
        authors={authors}
        authorLoading={authorLoading}
        articleLoading={articleLoading}
      />
    </>
  );
};
