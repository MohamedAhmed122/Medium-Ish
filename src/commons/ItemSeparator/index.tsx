import {COLORS} from '@Styles/colors';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  color?: string;
}

export const ItemSeparator: React.FC<Props> = ({color = COLORS.gray}) => {
  return <View style={[styles.separator, {backgroundColor: color}]} />;
};

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: COLORS.gray,
  },
});
