import {AppModal} from '@Components/Modal';
import React from 'react';
import {Text, View} from 'react-native';

// import styles from './styles'

interface SettingScreenProps {}
export const SettingScreen: React.FC<SettingScreenProps> = () => {
  return (
    <View>
      <Text>SettingScreen</Text>
      <View style={{marginTop: 1000}} />
      <AppModal isVisible={true} handleCloseModal={() => {}} />
    </View>
  );
};
