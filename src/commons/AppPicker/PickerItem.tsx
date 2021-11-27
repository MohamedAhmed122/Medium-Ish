import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AppText} from '../AppText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

interface PickerProps {
  label: string;
  color: string;
  icon: string;
  onPress(): void;
}

export const PickerItem: React.FC<PickerProps> = ({
  label,
  color,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, {backgroundColor: color}]}>
        <MaterialCommunityIcons name={icon} size={30} color="white" />
        <AppText style={styles.text}>{label}</AppText>
      </View>
    </TouchableOpacity>
  );
};
