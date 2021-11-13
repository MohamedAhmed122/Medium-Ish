import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';

import styles from './styles';

interface Props extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText(): void;
}

export const AppInput: React.FC<Props> = ({
  placeholder,
  value,
  onChangeText,
  children,
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      {children}
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        {...otherProps}
      />
    </View>
  );
};
