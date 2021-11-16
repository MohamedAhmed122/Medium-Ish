import React from 'react';
import {useFormikContext} from 'formik';
import {AppInput} from '@Commons/AppInput';
import {Text, StyleSheet, TextInputProps} from 'react-native';
import {COLORS} from '@Styles/colors';
import {UseFormikContext} from '@Types/Form';

interface Props extends TextInputProps {
  name: string;
}

export const AppInputField: React.FC<Props> = ({
  children,
  name,
  ...otherProps
}) => {
  const {
    setFieldValue,
    values,
    errors,
    setFieldTouched,
    touched,
  }: UseFormikContext = useFormikContext();
  return (
    <>
      <AppInput
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}>
        {children}
      </AppInput>
      {errors[name] && touched[name] && (
        <Text style={styles.error}>{errors[name]}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: COLORS.danger,
    margin: 10,
  },
});
