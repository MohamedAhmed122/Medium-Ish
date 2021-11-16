import React from 'react';
import * as Yup from 'yup';
import {AppForm, AppInputField, AppSubmitButton} from '@Components/Form';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '@Styles/colors';
import {LoginValue} from '@Types/Form';

interface LoginProps {}

export const LoginModal: React.FC<LoginProps> = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required().min(4).label('Email'),
    password: Yup.string().required().min(6).label('Password'),
  });

  const handleSubmit = (values: LoginValue) => {
    console.log(values);
  };
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.text}>Inset your credentials </Text>
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
