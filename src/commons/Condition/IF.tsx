import React from 'react';
import {ICondition} from '@Types/Condition';
import {StyleProp, View, ViewStyle} from 'react-native';

interface Props extends ICondition {
  style?: StyleProp<ViewStyle>;
}

export const IF: React.FC<Props> = ({condition, children, style}) => {
  // eslint-disable-next-line curly
  if (condition) return <View style={style}>{children}</View>;
  return null;
};
