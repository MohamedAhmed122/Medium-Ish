import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';

import styles from './styles';

interface Props extends TextInputProps {}

export const AppInput: React.FC<Props> = ({children, ...otherProps}) => {
  return (
    <View style={styles.container}>
      {children}
      <TextInput {...otherProps} />
    </View>
  );
};
