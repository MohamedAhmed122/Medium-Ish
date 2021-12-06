import React from 'react';

import {useLoginAuthor} from '@GraphQL/query';

import {RootNavigation} from '@Navigation/AppNavigation/interface';
import {AuthParams} from '@Navigation/AuthNavigator/interface';

import {LoginValue, initialFormValues} from '@Types/Form';
import {LoginForm} from './LoginForm';

import {Screen} from '@Commons/index';
import {Header} from '@Components/Header';
import {COLORS} from '@Styles/colors';

// import styles from './styles'

interface LoginScreenProps {
  navigation: RootNavigation;
}
export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const {loading, loginAuthor} = useLoginAuthor(navigation);

  const handleLoginSubmit = (value: initialFormValues) => {
    const newValues = value as LoginValue;
    loginAuthor({
      variables: {username: newValues.username},
    });
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
        loading={loading}
      />
    </Screen>
  );
};
