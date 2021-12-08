import React from 'react';
// import {useRegisterUser} from '@GraphQL/query';
import {initialFormValues, RegisterValue} from '@Types/Form';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthParamList, AuthParams} from '@Navigation/auth-stack/interface';

import {Screen} from '@Commons/Screen';
import {Header} from '@Components/Header';
import {RegisterForm} from './RegisterForm';
import {useInitiateAuthor} from '@GraphQL/query';

// import styles from './styles'

interface RegisterScreenProps {
  navigation: StackNavigationProp<AuthParamList, AuthParams.Register>;
}
export const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  const {loading, registerUser} = useInitiateAuthor(navigation);

  const handleSubmit = (values: initialFormValues): void => {
    const newValue = values as RegisterValue;
    navigation.navigate(AuthParams.UserAvatar);
    registerUser({
      variables: newValue,
    });
  };

  const handleGoBack = () => navigation.goBack();
  const handleNavigate = () => navigation.navigate(AuthParams.Login);

  return (
    <Screen>
      <Header handleGoBack={handleGoBack} title={'Welcome, to Medium-Ish'} />
      <RegisterForm
        handleSubmit={handleSubmit}
        loading={loading}
        handleNavigate={handleNavigate}
      />
    </Screen>
  );
};
