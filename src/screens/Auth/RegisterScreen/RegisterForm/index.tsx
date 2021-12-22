import React from 'react';
import {initialFormValues} from '@Types/Form';
import {validationRegisterSchema as validationSchema} from '@Utils/validationSchema';
import {AppForm, AppInputField, AppSubmitButton} from '@Components/Form';

import t from '@Lib/i18n';
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
            <AppInputField name="name" placeholder={t.inputs.name} />
            <AppInputField name="email" placeholder={t.inputs.email} />
            <AppInputField name="username" placeholder={t.inputs.username} />
            <AppInputField
              name="password"
              placeholder={t.inputs.password}
              secureTextEntry
            />
            <AppInputField
              name="confirmPassword"
              placeholder={t.inputs.confirmPassword}
              secureTextEntry
            />
            <AppSubmitButton
              title={t.register}
              color={COLORS.secondary}
              loading={loading}
            />
          </AppForm>
        </View>
        <AuthText
          style={styles.text}
          text={t.login}
          handleNavigate={handleNavigate}
        />
      </View>
    </AvoidingKeyboardView>
  );
};
