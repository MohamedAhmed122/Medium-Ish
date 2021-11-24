import React, {useState, useEffect} from 'react';
// TYPES
import {ModalType} from '@Types/Modal';
// RENDER
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import {View} from 'react-native';
import {RegisterModal} from './Register';
import {RequestAuth} from './RequestAuth';
import {LoginModal} from './Login';
import {CreatePost} from './CreatePost';
import {resizeModal} from '@Styles/resize';
import styles from './styles';

interface Props {
  handleCloseModal(): void;
  isVisible: boolean;
}

export const AppModal: React.FC<Props> = ({handleCloseModal, isVisible}) => {
  console.log(isVisible);
  const [modalType, setModalType] = useState<ModalType>(ModalType.RequestAuth);
  const [restartAnimation, setRestartAnimation] = useState(true);

  useEffect(() => {
    modalType && setRestartAnimation(true);
  }, [modalType]);

  return (
    <Modal
      onBackdropPress={handleCloseModal}
      isVisible={isVisible}
      style={styles.modal}>
      <Animatable.View
        style={[styles.modalContainer, {height: resizeModal(modalType)}]}
        duration={500}
        animation={restartAnimation ? 'slideInUp' : undefined}
        onAnimationEnd={() => setRestartAnimation(false)}>
        <RenderModal modalType={modalType} setModalType={setModalType} />
      </Animatable.View>
    </Modal>
  );
};

interface PropsRenderModal {
  modalType: ModalType;
  setModalType(type: ModalType): void;
}

const RenderModal: React.FC<PropsRenderModal> = ({modalType, setModalType}) => {
  return (
    <View>
      {modalType === ModalType.CreatePost ? (
        <CreatePost setModalType={setModalType} />
      ) : modalType === ModalType.LoginForm ? (
        <LoginModal setModalType={setModalType} />
      ) : modalType === ModalType.RegisterForm ? (
        <RegisterModal setModalType={setModalType} />
      ) : (
        <RequestAuth setModalType={setModalType} />
      )}
    </View>
  );
};
