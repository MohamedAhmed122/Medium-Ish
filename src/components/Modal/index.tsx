import React from 'react';

import {Navigators} from '@Navigation/index';
import {RootNavigation} from '@Navigation/app-navigation/interface';

import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import {RequestAuth} from './RequestAuth';

import styles from './styles';
import {useNavigation} from '@react-navigation/core';
interface Props {
  handleCloseModal(): void;
  isVisible: boolean;
}

export const AppModal: React.FC<Props> = ({handleCloseModal, isVisible}) => {
  const navigation = useNavigation<RootNavigation>();

  const handleNavigateToLogin = () => {
    navigation.navigate(Navigators.App.AuthNavigation, {
      screen: Navigators.AuthStack.Login,
    });
    handleCloseModal();
  };

  const handleNavigateToRegister = () => {
    navigation.navigate(Navigators.App.AuthNavigation, {
      screen: Navigators.AuthStack.Register,
    });
    handleCloseModal();
  };

  return (
    <Modal
      onBackdropPress={handleCloseModal}
      isVisible={isVisible}
      style={styles.modal}>
      <Animatable.View
        style={[styles.modalContainer]}
        duration={500}
        animation={'slideInUp'}>
        <RequestAuth
          handleNavigateToLogin={handleNavigateToLogin}
          handleNavigateToRegister={handleNavigateToRegister}
        />
      </Animatable.View>
    </Modal>
  );
};
