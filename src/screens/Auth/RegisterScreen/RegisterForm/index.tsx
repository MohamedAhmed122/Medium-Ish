import React from 'react';
import {initialFormValues} from '@Types/Form';
import {validationRegisterSchema as validationSchema} from '@Utils/validationSchema';
import {AppForm, AppInputField, AppSubmitButton} from '@Components/Form';
import {View} from 'react-native';
import {AuthText} from '@Components/AuthText';

import {COLORS} from '@Styles/colors';
import styles from './styles';

interface RegisterProps {
  handleSubmit(values: initialFormValues): void;
  loading: boolean;
  handleNavigate(): void;
}

export const RegisterForm: React.FC<RegisterProps> = ({
  handleSubmit,
  loading,
  handleNavigate,
}) => {
  return (
    <View style={styles.loginContainer}>
      <AppForm
        onSubmit={handleSubmit}
        initialValues={{
          username: '',
          password: '',
          confirmPassword: '',
          email: '',
          name: '',
        }}
        validationSchema={validationSchema}>
        <AppInputField name="name" placeholder="Name" />
        <AppInputField name="email" placeholder="Email" />
        <AppInputField name="username" placeholder="Username" />
        <AppInputField name="password" placeholder="Password" secureTextEntry />
        <AppInputField
          name="confirmPassword"
          placeholder="Confirm Password"
          secureTextEntry
        />
        <AppSubmitButton
          title="Register"
          color={COLORS.secondary}
          loading={loading}
        />

        <AuthText
          style={styles.authText}
          text="You already have an account!, Login"
          handleNavigate={handleNavigate}
        />
      </AppForm>
    </View>
  );
};
