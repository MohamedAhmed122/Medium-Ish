import * as Yup from 'yup';

export const validationRegisterSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  username: Yup.string().required().min(4).label('Username'),
  password: Yup.string().required().min(6).label('Password'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

export const validationLoginSchema = Yup.object().shape({
  username: Yup.string().required().min(4).label('Email'),
  password: Yup.string().required().min(6).label('Password'),
});
