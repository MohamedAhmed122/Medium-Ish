import React from 'react';
import {Image, View} from 'react-native';
import {RootNavigation} from '@Navigation/app-navigation/interface';
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
    navigation.reset({
      index: 0,
      routes: [{name: Navigators.App.TabNavigation}],
    });

  const handleAuthNavigation = () =>
    navigation.navigate(Navigators.App.AuthNavigation, {
      screen: Navigators.AuthStack.Register,
    });

  return (
    <Screen>
      <Image
        source={require('@Assets/images/welcome.png')}
        style={styles.img}
        resizeMode="cover"
      />
      <View style={styles.container}>
        <AppButton
          color={COLORS.secondary}
          title="Continue as Guest"
          onPress={handleAppNavigation}
        />
        <AppButton title="Register" onPress={handleAuthNavigation} />
        <AppText fontFamily="Roboto-Medium" style={styles.title}>
          Inspired by Medium ❤️
        </AppText>
      </View>
    </Screen>
  );
};
