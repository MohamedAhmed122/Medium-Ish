import React from 'react';
import {
  AppForm,
  AppInputField,
  AppPickerField,
  AppSubmitButton,
} from '@Components/Form';
import styles from './styles';

export const FromBio = () => {
  return (
    <AppForm
      initialValues={{bio: '', color: ''}}
      onSubmit={() => {}}
      validationSchema={null}>
      <AppInputField
        name="bio"
        placeholder="Bio"
        inputContainerStyle={styles.textarea}
      />
      <AppPickerField name="color" />
      <AppSubmitButton title="Submit" style={styles.button} />
    </AppForm>
  );
};
