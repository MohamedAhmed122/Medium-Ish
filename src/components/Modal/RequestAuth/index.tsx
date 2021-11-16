import React from 'react';
import {Text, View} from 'react-native';
import {ModalType} from '@Types/Modal';
import {AppButton} from '@Commons/AppButton';
import {COLORS} from '@Styles/colors';
import styles from './styles';

interface Props {
  setModalType(type: ModalType): void;
}
export const RequestAuth: React.FC<Props> = ({setModalType}) => {
  return (
    <View style={styles.modal}>
      <Text style={styles.text}>You need to be registered</Text>
      <AppButton
        title="Login"
        onPress={() => setModalType(ModalType.LoginForm)}
      />
      <AppButton
        title="Register"
        color={COLORS.secondary}
        onPress={() => setModalType(ModalType.RegisterForm)}
      />
    </View>
  );
};
