import React from 'react';
import {useFormikContext} from 'formik';
import {AppPicker} from '@Commons/AppPicker';
import {UseFormikContext} from '@Types/Form';
import {StyleSheet, Text} from 'react-native';
import {COLORS} from '@Styles/colors';

interface Props {
  name: string;
}

export const AppPickerField: React.FC<Props> = ({name}) => {
  const {errors, setFieldValue, values, touched}: UseFormikContext =
    useFormikContext();

  console.log(errors);
  return (
    <>
      <AppPicker
        setSelectedItem={item => setFieldValue(name, item)}
        items={categories}
        selectedItem={values[name]}
      />
      {errors[name] && touched[name] && (
        <Text style={styles.error}>{errors[name]}</Text>
      )}
      {/* <ErrorMessage isTouched={touched[name]} error={errors[name]} /> */}
    </>
  );
};

const categories = [
  {label: 'Furniture', id: 1, icon: 'floor-lamp', color: '#fc5c6c'},
  {label: 'Cars', id: 2, icon: 'car', color: '#fd9644'},
  {label: 'Cameras', id: 3, icon: 'camera', color: '#fed330'},
  {label: 'Games', id: 4, icon: 'cards', color: '#26de81'},
  {label: 'Clothing', id: 5, icon: 'shoe-heel', color: '#2bcbba'},
  {label: 'Sports', id: 6, icon: 'basketball', color: '#45aaf2'},
  {label: 'Movies & Music', id: 7, icon: 'headphones', color: '#4b7bec'},
];

const styles = StyleSheet.create({
  error: {
    color: COLORS.danger,
    margin: 10,
  },
});
