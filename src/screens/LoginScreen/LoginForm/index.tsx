import React from 'react';
// TYPES
import {LoginValue} from '@Types/Form';
// FORM
import {AppForm, AppInputField, AppSubmitButton} from '@Components/Form';
import {validationLoginSchema as validationSchema} from '@Utils/validationSchema';
// RENDER

import {StyleSheet, View} from 'react-native';
import {COLORS} from '@Styles/colors';

interface LoginFormProps {
  handleSubmit(value: LoginValue): void;
}

export const LoginForm: React.FC<LoginFormProps> = ({handleSubmit}) => {
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
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    marginTop: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.secondary,
  },
});
