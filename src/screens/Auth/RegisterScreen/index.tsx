import React from 'react';
import {View} from 'react-native';
// import {useRegisterUser} from '@GraphQL/query';
import {initialFormValues, RegisterValue} from '@Types/Form';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthParamList, AuthParams} from '@Navigation/auth-stack/interface';

import t from '@Lib/i18n';
import {Screen} from '@Commons/Screen';
import {Header} from '@Components/Header';
import {RegisterForm} from './RegisterForm';
import {useInitiateAuthor} from '@GraphQL/requests';

// import styles from './styles'

interface RegisterScreenProps {
  navigation: StackNavigationProp<AuthParamList, AuthParams.Register>;
}
export const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  const onInitiateUserCompleted = () =>
    navigation.navigate(AuthParams.UserAvatar);

  const {loading, registerUser} = useInitiateAuthor(onInitiateUserCompleted);

  const handleSubmit = (values: initialFormValues): void => {
    const newValue = values as RegisterValue;

    registerUser({
      variables: newValue,
    });
  };

  const handleGoBack = () => navigation.goBack();
  const handleNavigate = () => navigation.navigate(AuthParams.Login);

  return (
    <Screen scroll>
      <View>
        <Header handleGoBack={handleGoBack} title={t.welcomeText} />
        <RegisterForm
          handleSubmit={handleSubmit}
          loading={loading}
          handleNavigate={handleNavigate}
        />
      </View>
    </Screen>
  );
};
