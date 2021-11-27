import React from 'react';
import {
  GestureResponderEvent,
  TouchableWithoutFeedbackProps,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export interface PressableScaleProps extends TouchableWithoutFeedbackProps {
  activeScale?: number;
}

const ReanimatedTouchableWithoutFeedback = Reanimated.createAnimatedComponent(
  TouchableWithoutFeedback,
);

export const AppPressableScale: React.FC<PressableScaleProps> = ({
  children,
  ...props
}) => {
  const {
    activeScale = 0.95,
    style,
    onPressIn: _onPressIn,
    onPressOut: _onPressOut,
    delayPressIn = 0,
    ...restProps
  } = props;

  const isPressedIn = useSharedValue(false);

  const touchableStyle = useAnimatedStyle(
    () => ({
      transform: [{scale: withSpring(isPressedIn.value ? activeScale : 1)}],
    }),
    [activeScale, isPressedIn],
  );

  const onPressIn = (event: GestureResponderEvent) => {
    isPressedIn.value = true;
    _onPressIn?.(event);
  };

  const onPressOut = (event: GestureResponderEvent) => {
    isPressedIn.value = false;
    _onPressOut?.(event);
  };

  return (
    <ReanimatedTouchableWithoutFeedback
      delayPressIn={delayPressIn}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={touchableStyle}
      {...restProps}>
      <View style={style}>{children}</View>
    </ReanimatedTouchableWithoutFeedback>
  );
};
