import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {COLORS} from '@Styles/index';

interface Props extends TouchableOpacityProps {
  color?: string;
  title: string;
  onPress?(): void;
  style?: StyleProp<ViewStyle>;
}

export const AppBadge: React.FC<Props> = ({
  color = COLORS.secondary,
  title,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 36,
    width: 105,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 7,
  },
  text: {
    fontSize: 15,
    color: COLORS.white,
    fontWeight: 'bold',
  },
});
