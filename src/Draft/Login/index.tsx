import React from 'react';
// TYPES
import {ModalType} from '@Types/Modal';
import {LoginValue} from '@Types/Form';
// FORM
import {AppForm, AppInputField, AppSubmitButton} from '@Components/Form';
import {validationLoginSchema as validationSchema} from '@Utils/validationSchema';
// RENDER
import * as Animatable from 'react-native-animatable';
import {StyleSheet} from 'react-native';
import {Header} from '@Components/Header';
import {COLORS} from '@Styles/colors';

interface LoginProps {
  setModalType(type: ModalType): void;
}

export const LoginModal: React.FC<LoginProps> = ({setModalType}) => {
  const handleSubmit = (values: LoginValue): void => {
    console.log(values);
  };

  const handleGoBack = (): void => setModalType(ModalType.RequestAuth);

  return (
    <Animatable.View
      style={styles.loginContainer}
      duration={1000}
      animation="slideInUp">
      <Header title="Login Form" handleGoBack={handleGoBack} />
      <AppForm
        onSubmit={handleSubmit}
        initialValues={{username: '', password: ''}}
        validationSchema={validationSchema}>
        <AppInputField name="username" placeholder="Username" />
        <AppInputField name="password" placeholder="Password" />
        <AppSubmitButton title="Login" />
      </AppForm>
    </Animatable.View>
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
