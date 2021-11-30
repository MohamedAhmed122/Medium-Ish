import React from 'react';
// TYPES
import {initialFormValues} from '@Types/Form';
// FORM
import {AppForm, AppInputField, AppSubmitButton} from '@Components/Form';
import {validationLoginSchema as validationSchema} from '@Utils/validationSchema';
// RENDER
import {Pressable, View} from 'react-native';
import {AppText} from '@Commons/AppText';
import styles from './styles';

interface LoginFormProps {
  handleSubmit(value: initialFormValues): void;
  handleNavigateToRegister(): void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  handleSubmit,
  handleNavigateToRegister,
}) => {
  return (
    <View style={styles.loginContainer}>
      <AppForm
        onSubmit={handleSubmit}
        initialValues={{username: '', password: ''}}
        validationSchema={validationSchema}>
        <AppInputField name="username" placeholder="Username" />
        <AppInputField name="password" placeholder="Password" />
        <AppSubmitButton title="Login" />
      </AppForm>
      <Pressable onPress={handleNavigateToRegister}>
        <AppText fontFamily="Roboto-Bold" style={styles.title}>
          Create new Account!
        </AppText>
      </Pressable>
    </View>
  );
};
