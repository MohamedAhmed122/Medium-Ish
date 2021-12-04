import {PickerItem} from '../Common';
import {FormikErrors, FormikTouched} from 'formik';
import {Nullable} from '../Common';

export interface LoginValue {
  username: string;
  password: string;
}
export interface RegisterValue extends LoginValue {
  email: string;
  name: string;
  confirmPassword: string;
}

export interface CreatePostValue {
  title: string;
  description: string;
  additionalDescription: string;
  categories: Nullable<string>;
}

export interface BioValues {
  bio: string;
  color: Nullable<PickerItem>;
}

export type initialFormValues = Readonly<
  LoginValue | RegisterValue | CreatePostValue | BioValues
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
