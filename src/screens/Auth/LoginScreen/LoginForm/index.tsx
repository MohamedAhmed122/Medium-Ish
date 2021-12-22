import React from 'react';
// TYPES
import {initialFormValues} from '@Types/Form';
// FORM
import {AppForm, AppInputField, AppSubmitButton} from '@Components/Form';
import {validationLoginSchema as validationSchema} from '@Utils/validationSchema';
// RENDER
import t from '@Lib/i18n';
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
          <AppInputField name="username" placeholder={t.inputs.username} />
          <AppInputField
            name="password"
            placeholder={t.inputs.password}
            secureTextEntry
          />
          <AppSubmitButton title={t.login} loading={loading} />
        </AppForm>
      </View>
      <AuthText
        style={styles.title}
        text={t.register}
        handleNavigate={handleNavigateToRegister}
      />
    </View>
  );
};
