import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from '@Commons/AppText';
import {COLORS} from '@Styles/colors';

interface Props {
  message: string;
}

export const Empty: React.FC<Props> = ({
  message = 'Unfortunately, The Current List is Empty',
}) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{message}</AppText>
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
    fontSize: 19,
    color: COLORS.primary,
    marginTop: 40,
    textAlign: 'center',
  },
});
