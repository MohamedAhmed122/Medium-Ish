import React from 'react';
// GraphQL
import {useRegisterUser} from '@GraphQL/requests';
// TYPES
import {initialFormValues, RegisterValue} from '@Types/Form';
import {ModalType} from '@Types/Modal';
// FORM
import {validationRegisterSchema as validationSchema} from '@Utils/validationSchema';
import {AppForm, AppInputField, AppSubmitButton} from '@Components/Form';
// RENDER
import * as Animatable from 'react-native-animatable';
import {StyleSheet} from 'react-native';
import {Header} from '@Components/Header';
import {COLORS} from '@Styles/colors';

interface RegisterProps {
  setModalType(type: ModalType): void;
}

export const RegisterModal: React.FC<RegisterProps> = ({setModalType}) => {
  const {registerUser, user, loading, error} = useRegisterUser(setModalType);

  const handleGoBack = (): void => setModalType(ModalType.RequestAuth);

  const handleSubmit = (values: initialFormValues): void => {
    const newValue = values as RegisterValue;
    registerUser({
      variables: newValue,
    });
  };
  console.log(user, loading, error);
  return (
    <Animatable.View
      style={styles.loginContainer}
      duration={1000}
      animation="slideInUp">
      <Header handleGoBack={handleGoBack} title={'Register Form'} />
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
        <AppSubmitButton title="Register" color={COLORS.secondary} />
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
