/* eslint-disable curly */
import React, {useState} from 'react';
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
import {useCreateArticle} from '@GraphQL/query';
import {useReactiveVar} from '@apollo/client';
import {currentAuthor} from '@GraphQL/Apollo/cache';

interface ArticleDetailProps {
  route: RouteProp<PostParamsList, PostParams.PostDetail>;
}
export const ArticleDetail: React.FC<ArticleDetailProps> = ({route}) => {
  const [comment, setComment] = useState<string>('');
  const {id} = route.params;
  const currentUser = useReactiveVar(currentAuthor);
  const {createComment} = useCreateArticle();
  const {data, loading, error} = useGetArticleById(id);

  const handleCreateComment = () => {
    data &&
      createComment({
        variables: {
          username: currentUser.username,
          imageUrl: currentUser.imageUrl || '',
          id: data.article.id,
          comment,
        },
      });
  };

  if (loading) return <AppLoading />;
  if (error || !data) return <Error />;

  return (
    <Screen>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <Details article={data.article} />
            <Comment
              comment={comment}
              setComment={setComment}
              handleCreateComment={handleCreateComment}
            />
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
