import React from 'react';
import {initialFormValues} from '@Types/Form';
import {validationRegisterSchema as validationSchema} from '@Utils/validationSchema';
import {AppForm, AppInputField, AppSubmitButton} from '@Components/Form';
import {View} from 'react-native';

import {AvoidingKeyboardView} from '@Commons/AvoidingKeyboardView';
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
    <AvoidingKeyboardView>
      <View style={styles.container}>
        <View>
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
            <AppInputField
              name="password"
              placeholder="Password"
              secureTextEntry
            />
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
          </AppForm>
        </View>
        <AuthText
          style={styles.text}
          text="Login"
          handleNavigate={handleNavigate}
        />
      </View>
    </AvoidingKeyboardView>
  );
};
