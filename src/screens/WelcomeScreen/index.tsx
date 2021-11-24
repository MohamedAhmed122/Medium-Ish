import React from 'react';
import {Image, View} from 'react-native';
import {
  AppNavigationParams,
  RootNavigation,
} from '@Navigation/AppNavigation/interface';
import {Navigators} from '@Navigation/index';
import {Screen} from '@Commons/Screen';
import {AppButton, AppText} from '@Commons/index';
import {COLORS} from '@Styles/colors';
import styles from './styles';

interface WelcomeScreenProps {
  navigation: RootNavigation;
}
export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  const handleAppNavigation = () =>
    navigation.navigate(Navigators.App.TabNavigation, {
      screen: Navigators.Tab.Post,
    });

  const handleAuthNavigation = () =>
    navigation.navigate(AppNavigationParams.AuthNavigation);

  return (
    <Screen>
      <Image
        source={require('@Assets/images/welcome.png')}
        style={styles.img}
        resizeMode="cover"
      />
      <View style={styles.container}>
        <AppButton title="Continue as Guest" onPress={handleAppNavigation} />
        <AppButton
          title="Login"
          onPress={handleAuthNavigation}
          color={COLORS.lightGreen}
        />
        <AppText fontFamily="Roboto-Medium" style={styles.title}>
          this appLication inspired by Medium ❤️
        </AppText>
      </View>
    </Screen>
  );
};
