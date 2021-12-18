import React from 'react';
// TYPES
import {initialFormValues} from '@Types/Form';
// FORM
import {AppForm, AppInputField, AppSubmitButton} from '@Components/Form';
import {validationLoginSchema as validationSchema} from '@Utils/validationSchema';
// RENDER
import {View} from 'react-native';
import {AuthText} from '@Components/AuthText';
import styles from './styles';

interface LoginFormProps {
  handleSubmit(value: initialFormValues): void;
  handleNavigateToRegister(): void;
  loading: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  handleSubmit,
  handleNavigateToRegister,
  loading,
}) => {
  return (
    <View style={styles.loginContainer}>
      <View>
        <AppForm
          onSubmit={handleSubmit}
          initialValues={{username: '', password: ''}}
          validationSchema={validationSchema}>
          <AppInputField name="username" placeholder="Username" />
          <AppInputField
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <AppSubmitButton title="Login" loading={loading} />
        </AppForm>
      </View>
      <AuthText
        style={styles.title}
        text="Register"
        handleNavigate={handleNavigateToRegister}
      />
    </View>
  );
};
