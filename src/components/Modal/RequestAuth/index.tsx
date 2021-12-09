import React from 'react';
import {Text, View} from 'react-native';
import {AppButton} from '@Commons/AppButton';

import {COLORS} from '@Styles/colors';
import styles from './styles';

interface Props {
  handleNavigateToLogin(): void;
  handleNavigateToRegister(): void;
}
export const RequestAuth: React.FC<Props> = ({
  handleNavigateToLogin,
  handleNavigateToRegister,
}) => {
  return (
    <View style={styles.modal}>
      <Text style={styles.text}>You need to be registered</Text>
      <AppButton title="Login" onPress={handleNavigateToLogin} />
      <AppButton
        title="Register"
        color={COLORS.secondary}
        onPress={handleNavigateToRegister}
      />
    </View>
  );
};
