import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useFormikContext} from 'formik';
import {AppPicker} from '@Commons/AppPicker';
import {UseFormikContext} from '@Types/Form';
import {PickerItem} from '@Types/Common';
import {COLORS} from '@Styles/colors';

interface Props {
  name: string;
  placeholder: string;
  inverted?: boolean;
  items: Array<PickerItem>;
}

export const AppPickerField: React.FC<Props> = ({
  name,
  items,
  placeholder,
  inverted,
}) => {
  const {errors, setFieldValue, values, touched}: UseFormikContext =
    useFormikContext();

  console.log(errors);
  return (
    <>
      <AppPicker
        placeholder={placeholder}
        setSelectedItem={item => setFieldValue(name, item)}
        items={items}
        selectedItem={values[name]}
        inverted={inverted}
      />
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
