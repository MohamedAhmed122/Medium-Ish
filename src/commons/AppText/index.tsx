/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleProp, TextProps, TextStyle, Text} from 'react-native';

export interface AppTextProps
  extends Pick<TextProps, Exclude<keyof TextProps, 'style'>> {
  style?: StyleProp<TextStyle>;
  fontFamily?:
    | 'Roboto-Black'
    | 'Roboto-Bold'
    | 'Roboto-ExtraBold'
    | 'Roboto-ExtraLight'
    | 'Roboto-Medium'
    | 'Roboto-Regular'
    | 'Roboto-Light'
    | 'Roboto-Thin';
}

export const AppText: React.FC<AppTextProps> = ({
  fontFamily = 'Roboto-Regular',
  style,
  ...props
}) => (
  <Text
    style={[{fontFamily, letterSpacing: 0.1, fontSize: 15}, style]}
    {...props}
  />
);
