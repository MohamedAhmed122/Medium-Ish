import React from 'react';
import {useFormikContext} from 'formik';
import {AppButton, AppButtonProps} from '@Commons/index';

interface Props extends Omit<AppButtonProps, 'onPress'> {}

export const AppSubmitButton: React.FC<Props> = ({
  title,
  color,
  style,
  loading,
}) => {
  const {handleSubmit, dirty, isValid, isSubmitting} = useFormikContext();
  return (
    <AppButton
      title={title}
      color={color}
      style={style}
      onPress={handleSubmit}
      loading={loading}
      disabled={!dirty || !isValid || isSubmitting}
    />
  );
};
