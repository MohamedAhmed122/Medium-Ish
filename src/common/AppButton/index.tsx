import React from 'react';
import {COLORS} from '../../styles';
import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  color: string;
  onPress(): void;
  style: StyleProp<ViewStyle>;
}

export const AppButton: React.FC<Props> = ({
  title,
  color = COLORS.primary,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
