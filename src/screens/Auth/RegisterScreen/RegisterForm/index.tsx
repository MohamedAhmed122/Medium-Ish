import React from 'react';
import {initialFormValues} from '@Types/Form';
import {validationRegisterSchema as validationSchema} from '@Utils/validationSchema';
import {AppForm, AppInputField, AppSubmitButton} from '@Components/Form';
import {View} from 'react-native';
import {AppButton} from '@Commons/AppButton';
// import {AuthText} from '@Components/AuthText';

import {COLORS} from '@Styles/colors';
import styles from './styles';
import {AvoidingKeyboardView} from '@Commons/AvoidingKeyboardView';

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
      <AvoidingKeyboardView>
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
          <AppButton title="Login" onPress={handleNavigate} />
        </AppForm>
      </AvoidingKeyboardView>
    </View>
  );
};
