import * as Yup from 'yup';

export const validationRegisterSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  name: Yup.string().required().min(4).label('Name'),
  username: Yup.string().required().min(4).label('Username'),
  password: Yup.string().required().min(6).label('Password'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

export const validationLoginSchema = Yup.object().shape({
  username: Yup.string().required().min(4).label('Username'),
  password: Yup.string().required().min(6).label('Password'),
});

export const createPostValidationSchema = Yup.object().shape({
  title: Yup.string().required().label('Title'),
  description: Yup.string().required().min(40).label('Description'),
  categories: Yup.object().required().nullable().label('Category'),
});

export const editAuthorValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  name: Yup.string().required().min(4).label('Name'),
  color: Yup.object().required().nullable().label('Color'),
});
