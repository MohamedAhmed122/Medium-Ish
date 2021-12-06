/* eslint-disable curly */
import React from 'react';
// TYPES
import {RouteProp} from '@react-navigation/core';
import {
  PostParamsList,
  PostParams,
} from '../../navigation/AppNavigation/interface';

import {AppLoading, Screen, Error, Empty} from '@Commons/index';
import {useGetArticleById} from '@GraphQL/query';
import {Details, Comment, CommentList} from './components';
import {FlatList} from 'react-native';

import styles from './styles';

interface ArticleDetailProps {
  route: RouteProp<PostParamsList, PostParams.PostDetail>;
}
export const ArticleDetail: React.FC<ArticleDetailProps> = ({route}) => {
  const {id} = route.params;

  const {data, loading, error} = useGetArticleById(id);

  if (loading) return <AppLoading />;
  if (error || !data) return <Error />;

  return (
    <Screen>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <Details article={data.article} />
            <Comment />
          </>
        )}
        ListEmptyComponent={Empty}
        data={data.article.comments}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CommentList comment={item} />}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </Screen>
  );
};