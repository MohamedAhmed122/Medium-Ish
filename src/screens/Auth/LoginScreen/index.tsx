import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthParamList, AuthParams} from '@Navigation/AuthNavigator/interface';
import {LoginValue, initialFormValues} from '@Types/Form';
import {LoginForm} from './LoginForm';
import {Screen} from '@Commons/index';
import {Header} from '@Components/Header';
import {COLORS} from '@Styles/colors';

// import styles from './styles'

interface LoginScreenProps {
  navigation: StackNavigationProp<AuthParamList, AuthParams.Login>;
}
export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const handleLoginSubmit = (value: initialFormValues) => {
    const newValues = value as LoginValue;
    console.log(newValues);
  };

  const handleGoBack = () => navigation.goBack();

  const handleNavigateToRegister = () =>
    navigation.navigate(AuthParams.Register);

  return (
    <Screen>
      <Header
        title="Welcome, to Medium-Ish"
        handleGoBack={handleGoBack}
        color={COLORS.primary}
      />
      <LoginForm
        handleSubmit={handleLoginSubmit}
        handleNavigateToRegister={handleNavigateToRegister}
      />
    </Screen>
  );
};
