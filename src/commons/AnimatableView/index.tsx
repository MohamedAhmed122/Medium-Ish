import React from 'react';
import {ViewProps} from 'react-native';
import * as Animatable from 'react-native-animatable';

interface AnimatableViewProps extends ViewProps {
  animation?: Animatable.Animation;
  duration?: number;
}

export const AnimatableView: React.FC<AnimatableViewProps> = ({
  animation = 'fadeIn',
  duration = 1000,
  children,
  ...props
}) => {
  return (
    <Animatable.View duration={duration} animation={animation} {...props}>
      {children}
    </Animatable.View>
  );
};
