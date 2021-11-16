import {FormikErrors, FormikTouched} from 'formik';

export interface LoginValue {
  username: string;
  password: string;
}

export type initialFormValues = LoginValue;

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
