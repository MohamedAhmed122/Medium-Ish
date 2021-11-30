import React from 'react';
// import {useRegisterUser} from '@GraphQL/query';
import {initialFormValues, RegisterValue} from '@Types/Form';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthParamList, AuthParams} from '@Navigation/AuthNavigator/interface';

import {Screen} from '@Commons/Screen';
import {Header} from '@Components/Header';
import {RegisterForm} from './RegisterForm';
// import styles from './styles'

interface RegisterScreenProps {
  navigation: StackNavigationProp<AuthParamList, AuthParams.Register>;
}
export const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  // const {registerUser, loading} = useRegisterUser(navigation);

  const handleSubmit = (values: initialFormValues): void => {
    const newValue = values as RegisterValue;
    console.log(newValue);
    navigation.navigate(AuthParams.UserAvatar);
    // registerUser({
    //   variables: newValue,
    // });
  };

  const handleGoBack = () => navigation.goBack();

  return (
    <Screen>
      <Header handleGoBack={handleGoBack} title={'Welcome, to Medium-Ish'} />
      <RegisterForm handleSubmit={handleSubmit} loading={false} />
    </Screen>
  );
};
