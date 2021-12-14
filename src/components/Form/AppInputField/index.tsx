import React from 'react';
import {useFormikContext} from 'formik';
import {AppInput} from '@Commons/AppInput';
import {UseFormikContext} from '@Types/Form';
import {
  Text,
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {COLORS} from '@Styles/colors';

interface Props extends TextInputProps {
  name: string;
  inputContainerStyle?: StyleProp<ViewStyle>;
}

export const AppInputField: React.FC<Props> = ({
  children,
  name,
  inputContainerStyle,
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
        inputContainerStyle={inputContainerStyle}
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
    marginLeft: 24,
    marginTop: 8,
  },
});
