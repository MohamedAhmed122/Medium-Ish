/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {COLORS} from '@Styles/index';
import {
  ActivityIndicator,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import styles from './styles';

export interface AppButtonProps {
  title: string;
  color?: string;
  onPress(): void;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  disabled?: boolean;
}

export const AppButton: React.FC<AppButtonProps> = ({
  title,
  color = COLORS.primary,
  onPress,
  loading,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading || disabled}
      style={[
        styles.container,
        {backgroundColor: color, opacity: loading ? 0.6 : 1},
      ]}>
      {loading ? (
        <ActivityIndicator color={COLORS.white} size={'small'} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
