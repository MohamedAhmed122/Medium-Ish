import {AppButton} from '@Commons/AppButton';
import React from 'react';
import {Text, View} from 'react-native';
// import styles from './styles'

interface SearchScreenProps {}
export const SearchScreen: React.FC<SearchScreenProps> = () => {
  return (
    <View>
      <Text>SearchScreen</Text>
      <AppButton loading={true} title="Name" onPress={() => {}} />
    </View>
  );
};
