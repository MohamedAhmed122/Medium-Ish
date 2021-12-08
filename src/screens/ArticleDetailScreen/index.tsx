/* eslint-disable curly */
import React, {useCallback, useState} from 'react';
// TYPES
import {RouteProp} from '@react-navigation/core';
import {
  PostParamsList,
  PostParams,
} from '../../navigation/AppNavigation/interface';

import {AppLoading, Screen, Error, Empty} from '@Commons/index';
import {useGetArticleById, useCreateComment} from '@GraphQL/query';
import {Details, Comment, CommentList} from './components';
import {FlatList} from 'react-native';

import styles from './styles';
import {useReactiveVar} from '@apollo/client';
import {currentAuthor} from '@GraphQL/Apollo/cache';
import {AppModal} from '@Components/Modal';
import {getAvatarUri} from '@Utils/utils';

interface ArticleDetailProps {
  route: RouteProp<PostParamsList, PostParams.PostDetail>;
}
export const ArticleDetail: React.FC<ArticleDetailProps> = ({route}) => {
  const [comment, setComment] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const {id} = route.params;

  const currentUser = useReactiveVar(currentAuthor);

  const {createComment, commentLoading} = useCreateComment();

  const {data, loading, error} = useGetArticleById(id);

  const handleCreateComment = () => {
    !currentUser?.username
      ? setOpenModal(true)
      : createComment({
          variables: {
            username: currentUser.username,
            imageUrl: currentUser.imageUrl || getAvatarUri('avataaars', 7),
            id,
            comment,
          },
        });
    setComment('');
  };

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  if (loading) return <AppLoading />;
  if (error || !data) return <Error />;

  return (
    <Screen>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <Details article={data.article} />
            <Comment
              sendComment={{handleCreateComment, loading: commentLoading}}
              comment={comment}
              setComment={setComment}
            />
          </>
        )}
        ListEmptyComponent={Empty}
        data={data.article.comments}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CommentList comment={item} />}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <AppModal isVisible={openModal} handleCloseModal={handleCloseModal} />
    </Screen>
  );
};
