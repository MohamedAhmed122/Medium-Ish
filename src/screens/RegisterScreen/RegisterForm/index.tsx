import React from 'react';
import {initialFormValues} from '@Types/Form';
import {validationRegisterSchema as validationSchema} from '@Utils/validationSchema';
import {AppForm, AppInputField, AppSubmitButton} from '@Components/Form';
import {StyleSheet, View} from 'react-native';

import {COLORS} from '@Styles/colors';

interface RegisterProps {
  handleSubmit(values: initialFormValues): void;
  loading: boolean;
}

export const RegisterForm: React.FC<RegisterProps> = ({
  handleSubmit,
  loading,
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
        }}
        validationSchema={validationSchema}>
        <AppInputField name="email" placeholder="Email" />
        <AppInputField name="username" placeholder="Username" />
        <AppInputField name="password" placeholder="Password" />
        <AppInputField name="confirmPassword" placeholder="Confirm Password" />
        <AppSubmitButton
          title="Register"
          color={COLORS.secondary}
          loading={loading}
        />
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
