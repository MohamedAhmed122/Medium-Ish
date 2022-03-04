import React from 'react';
import {Text, View} from 'react-native';
import {AppButton} from '@Commons/AppButton';

import t from '@Lib/i18n';
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
      <Text style={styles.text}>{t.modalTitle}</Text>
      <AppButton title={t.login} onPress={handleNavigateToLogin} />
      <AppButton
        title={t.register}
        color={COLORS.secondary}
        onPress={handleNavigateToRegister}
      />
    </View>
  );
};
