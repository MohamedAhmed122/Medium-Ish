import React from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

import styles from './styles';

interface Props extends TextInputProps {
  inputContainerStyle?: StyleProp<ViewStyle>;
}

export const AppInput: React.FC<Props> = ({
  children,
  inputContainerStyle,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, inputContainerStyle]}>
      {children}
      <TextInput
        {...otherProps}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputText}
      />
    </View>
  );
};
