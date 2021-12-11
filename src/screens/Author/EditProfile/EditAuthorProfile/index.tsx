import React from 'react';
// TYPES
import {initialFormValues} from '@Types/Form';
// FORM
import {AppForm, AppInputField, AppSubmitButton} from '@Components/Form';
import {validationLoginSchema as validationSchema} from '@Utils/validationSchema';
// RENDER
import {View} from 'react-native';

// import styles from './styles';

interface LoginFormProps {
  handleSubmit(value: initialFormValues): void;
  handleNavigateToRegister(): void;
  loading: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  handleSubmit,

  loading,
}) => {
  return (
    <View>
      <AppForm
        onSubmit={handleSubmit}
        initialValues={{username: '', name: '', color: ''}}
        validationSchema={validationSchema}>
        <AppInputField name="username" placeholder="Username" />
        <AppInputField name="name" placeholder="Password" secureTextEntry />
        <AppSubmitButton title="Login" loading={loading} />
      </AppForm>
    </View>
  );
};
