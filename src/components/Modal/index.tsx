import React from 'react';

import {Navigators} from '@Navigation/index';
import {RootNavigation} from '@Navigation/app-navigation/interface';

import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import {RequestAuth} from './RequestAuth';

import styles from './styles';
interface Props {
  handleCloseModal(): void;
  isVisible: boolean;
  navigation: RootNavigation;
}

export const AppModal: React.FC<Props> = ({
  handleCloseModal,
  isVisible,
  navigation,
}) => {
  const handleNavigateToLogin = () =>
    navigation.navigate(Navigators.App.AuthNavigation, {
      screen: Navigators.AuthStack.Login,
    });

  const handleNavigateToRegister = () =>
    navigation.navigate(Navigators.App.AuthNavigation, {
      screen: Navigators.AuthStack.Register,
    });

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
