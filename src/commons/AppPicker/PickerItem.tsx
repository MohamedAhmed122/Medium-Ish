import {Nullable} from '@Types/Common';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

interface PickerProps {
  label: string;
  color: string;
  icon: Nullable<string>;
  onPress(): void;
}

export const PickerItem: React.FC<PickerProps> = ({color, icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, {backgroundColor: color}]}>
        {icon && <MaterialCommunityIcons name={icon} size={35} color="white" />}
      </View>
    </TouchableOpacity>
  );
};
