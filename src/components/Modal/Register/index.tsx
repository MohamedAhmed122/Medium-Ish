import React from 'react';
import {initialFormValues, RegisterValue} from '@Types/Form';
import {ModalType} from '@Types/Modal';
import * as Yup from 'yup';
import * as Animatable from 'react-native-animatable';
import {AppForm, AppInputField, AppSubmitButton} from '@Components/Form';
import {StyleSheet} from 'react-native';
import {COLORS} from '@Styles/colors';
import {Header} from '@Components/Header';
import {useRegisterUser} from '@GraphQL/query';

interface RegisterProps {
  setModalType(type: ModalType): void;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  username: Yup.string().required().min(4).label('Username'),
  password: Yup.string().required().min(6).label('Password'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});
export const RegisterModal: React.FC<RegisterProps> = ({setModalType}) => {
  const {registerUser, user, loading, error} = useRegisterUser();

  const handleGoBack = (): void => setModalType(ModalType.RequestAuth);

  const handleSubmit = (values: initialFormValues): void => {
    const newValue = values as RegisterValue;
    console.log(newValue);
    registerUser({
      variables: newValue,
      // update() {
      //   setModalType(ModalType.CreatePost);
      //   console.log('YES');
      // },
      onCompleted: () => {
        setModalType(ModalType.CreatePost);
        console.log('YES');
      },
    });
  };
  console.log(user, loading, error);
  return (
    <Animatable.View
      style={styles.loginContainer}
      duration={1000}
      animation="slideInUp">
      <Header handleGoBack={handleGoBack} title={'Register From'} />
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
