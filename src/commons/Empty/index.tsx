import {COLORS} from '@Styles/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  message: string;
}

export const Empty: React.FC<Props> = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '400',
    fontSize: 17,
    color: COLORS.secondary,
    marginTop: 40,
    textAlign: 'center',
  },
});
