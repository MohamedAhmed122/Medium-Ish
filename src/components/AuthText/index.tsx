import {AppText} from '@Commons/AppText';
import React from 'react';
import {Pressable, StyleProp, TextStyle} from 'react-native';

interface Props {
  handleNavigate(): void;
  style: StyleProp<TextStyle>;
  text: string;
}

export const AuthText: React.FC<Props> = ({handleNavigate, style, text}) => {
  return (
    <Pressable onPress={handleNavigate}>
      <AppText fontFamily="Roboto-Bold" style={style}>
        {text}
      </AppText>
    </Pressable>
  );
};
