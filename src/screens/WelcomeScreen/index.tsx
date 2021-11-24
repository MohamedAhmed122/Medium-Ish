import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootNavigation} from '@Navigation/AppNavigation/interface';
import {Navigators} from '@Navigation/index';

// import styles from './styles'

interface WelcomeScreenProps {
  navigation: RootNavigation;
}
export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  const handleNavigation = () => {
    navigation.navigate(Navigators.App.TabNavigation, {
      screen: Navigators.Tab.Search,
    });
  };

  return (
    <View style={{margin: 100}}>
      <Text>WelcomeScreen</Text>
      <Button title="Navigate" onPress={handleNavigation} />
    </View>
  );
};
