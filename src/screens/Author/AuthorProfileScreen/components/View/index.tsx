import React from 'react';
import {FlatList} from 'react-native';
import Modal from 'react-native-modal';

import {AuthorDetail} from '@GraphQL/requests';

import {ArticleCard} from '@Components/AuthorArticleCard';
import {AuthorInfo} from '../AuthorInfo';
import {AppText, AnimatableView} from '@Commons/index';

import styles from './styles';

interface ViewAuthorProfileProps {
  author: AuthorDetail;
  openAuthorModal: boolean;
  onCloseModal(): void;
  onNavigateToArticleDetail(id: string): void;
}

export const ViewAuthorProfile: React.FC<ViewAuthorProfileProps> = ({
  author,
  openAuthorModal,
  onCloseModal,
  onNavigateToArticleDetail,
}) => {
  return (
    <Modal
      isVisible={openAuthorModal}
      onBackdropPress={onCloseModal}
      style={styles.modal}
      swipeDirection={['down']}
      onSwipeComplete={onCloseModal}>
      <AnimatableView animation="slideInUp" style={styles.ModalContainer}>
        <FlatList
          ListHeaderComponent={() => (
            <>
              <AuthorInfo author={author} />
              <AppText style={styles.text} fontFamily="Roboto-Bold">
                My Articles
              </AppText>
            </>
          )}
          data={author.article}
          keyExtractor={data => data.id}
          renderItem={({item}) => (
            <ArticleCard
              article={item}
              handleNavigate={() => onNavigateToArticleDetail(item.id)}
            />
          )}
        />
      </AnimatableView>
    </Modal>
  );
};
