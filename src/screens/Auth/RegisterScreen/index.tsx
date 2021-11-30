import React from 'react';
import {useRegisterUser} from '@GraphQL/query';
import {initialFormValues, RegisterValue} from '@Types/Form';
import {RootNavigation} from '@Navigation/AppNavigation/interface';
import {Screen} from '@Commons/Screen';
import {Header} from '@Components/Header';
import {RegisterForm} from './RegisterForm';
// import styles from './styles'

interface RegisterScreenProps {
  navigation: RootNavigation;
}
export const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  const {registerUser, loading} = useRegisterUser(navigation);

  const handleSubmit = (values: initialFormValues): void => {
    const newValue = values as RegisterValue;
    registerUser({
      variables: newValue,
    });
  };

  const handleGoBack = () => navigation.goBack();

  return (
    <Screen>
      <Header handleGoBack={handleGoBack} title={'Welcome, to Medium-Ish'} />
      <RegisterForm handleSubmit={handleSubmit} loading={loading} />
    </Screen>
  );
};
