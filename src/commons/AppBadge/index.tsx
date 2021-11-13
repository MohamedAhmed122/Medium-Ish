import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '@Styles/index';

interface Props {
  color?: string;
  title: string;
  onPress(): void;
}

export const AppBadge: React.FC<Props> = ({
  color = COLORS.secondary,
  title,
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

const styles = StyleSheet.create({
  container: {
    height: 36,
    width: 95,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 7,
  },
  text: {
    fontSize: 15,
    color: COLORS.white,
    fontWeight: 'bold',
  },
});
