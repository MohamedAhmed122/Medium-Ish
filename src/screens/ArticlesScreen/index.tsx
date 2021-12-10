/* eslint-disable curly */
import React from 'react';
// TYPES
import {
  ArticleParams,
  ArticleParamList,
} from '@Navigation/article-stack/interface';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// GRAPHQL
import {useGetAuthors, useGetArticles, Article} from '@GraphQL/query';
import {watchListVar} from '@GraphQL/Apollo/cache';
// SOUND
import {playSong} from '@Utils/playSound';
import {useMediaPlayer} from '@Hooks/useMediaPlayer';
// RENDER
import {FlatList} from 'react-native';
import {UserList} from './UserList';
import {ArticleCard} from '@Components/ArticleCard';
import {Error, AppLoading, Screen} from '@Commons/index';
import {watchListResolver} from '@Utils/watchListReslover';

import styles from './styles';

interface PostsProps {
  navigation: NativeStackNavigationProp<
    ArticleParamList,
    ArticleParams.Articles
  >;
}
export const Posts: React.FC<PostsProps> = ({navigation}) => {
  const {loading, authors} = useGetAuthors();

  const {articles, articleError, articleLoading, refetch} = useGetArticles();

  useMediaPlayer();

  const handleNavigate = (id: string): void => {
    navigation.navigate(ArticleParams.ArticleDetail, {id});
  };

  const handleWatchListItems = (item: Article): void =>
    watchListVar && watchListResolver(watchListVar, item);

  const onRefresh = () => {
    playSong();
    refetch();
  };

  if (loading || !authors) return <AppLoading />;
  if (articleLoading) return <AppLoading />;
  if (articleError || !articles) return <Error />;

  return (
    <Screen>
      <FlatList
        onRefresh={onRefresh}
        refreshing={articleLoading}
        ListHeaderComponentStyle={styles.header}
        ListHeaderComponent={() => (
          <>
            {authors && (
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={item => item.id}
                data={authors.authors}
                renderItem={({item}) => <UserList item={item} />}
                ListEmptyComponent={AppLoading}
              />
            )}
          </>
        )}
        data={articles.articles}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ArticleCard
            item={item}
            handleNavigate={handleNavigate}
            handleWatchListItems={handleWatchListItems}
          />
        )}
      />
    </Screen>
  );
};
