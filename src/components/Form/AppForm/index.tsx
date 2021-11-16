import React from 'react';
import {Formik} from 'formik';
import {initialFormValues} from '@Types/Form';

interface Props {
  initialValues: initialFormValues;
  validationSchema: any;
  onSubmit: (values: initialFormValues) => void;
}

export const AppForm: React.FC<Props> = ({
  initialValues,
  validationSchema,
  children,
  onSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({}) => <>{children}</>}
    </Formik>
  );
};
