import {PickerItem} from '../Common';
import {FormikErrors, FormikTouched} from 'formik';
import {Nullable} from '../Common';
import {Author} from '@GraphQL/query';

export interface LoginValue {
  username: string;
  password: string;
}
export interface RegisterValue extends LoginValue {
  email: string;
  name: string;
  confirmPassword: string;
}

export interface EditProfileValue
  extends Omit<Author, 'image' | 'imageUrl' | 'id' | 'color'> {
  color: string;
}

export interface CreateArticleValue {
  title: string;
  description: string;
  categories: PickerItem;
}

export interface BioValues {
  bio: string;
  color: Nullable<PickerItem>;
}

export type initialFormValues = Readonly<
  LoginValue | RegisterValue | CreateArticleValue | BioValues | EditProfileValue
>;

export interface UseFormikContext {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => void;
  values: any;
  errors: FormikErrors<any>;
  setFieldTouched: (
    field: string,
    isTouched?: boolean | undefined,
    shouldValidate?: boolean | undefined,
  ) => void;
  touched: FormikTouched<any>;
}
