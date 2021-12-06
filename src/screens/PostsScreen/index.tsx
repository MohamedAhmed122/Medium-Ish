/* eslint-disable curly */
import React from 'react';
// TYPES
import {
  PostParamsList,
  PostParams,
} from '../../navigation/AppNavigation/interface';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {UserList} from './UserList';
import {PostCard} from '@Components/PostCard';
// GRAPHQL
import {useGetAuthors, useGetArticles, Article} from '@GraphQL/query';
import {watchListVar} from '@GraphQL/Apollo/cache';
// RENDER
import {FlatList} from 'react-native';
import {Error, AppLoading, Screen} from '@Commons/index';

import {watchListResolver} from '@Utils/cart';
import styles from './styles';
interface PostsProps {
  navigation: NativeStackNavigationProp<PostParamsList, PostParams.Posts>;
}
export const Posts: React.FC<PostsProps> = ({navigation}) => {
  const {loading, authors} = useGetAuthors();
  const {articles, articleError, articleLoading} = useGetArticles();

  const handleNavigate = (id: string): void => {
    navigation.navigate(PostParams.PostDetail, {id});
  };

  const handleWatchListItems = (item: Article): void =>
    watchListVar && watchListResolver(watchListVar, item);

  if (loading || !authors) return <AppLoading />;
  if (articleLoading) return <AppLoading />;
  if (articleError || !articles) return <Error />;

  return (
    <Screen>
      <FlatList
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
          <PostCard
            item={item}
            handleNavigate={handleNavigate}
            handleWatchListItems={handleWatchListItems}
          />
        )}
      />
    </Screen>
  );
};
