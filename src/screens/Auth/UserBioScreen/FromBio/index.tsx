import React from 'react';
import {
  AppForm,
  AppInputField,
  AppPickerField,
  AppSubmitButton,
} from '@Components/Form';
import {colors} from '@Assets/data';
import styles from './styles';
import {initialFormValues} from '@Types/Form';

interface Props {
  handleSubmit(values: initialFormValues): void;
}

export const FromBio: React.FC<Props> = ({handleSubmit}) => {
  return (
    <AppForm
      initialValues={{bio: '', color: ''}}
      onSubmit={handleSubmit}
      validationSchema={null}>
      <AppInputField
        name="bio"
        placeholder="Bio"
        inputContainerStyle={styles.textarea}
      />
      <AppPickerField
        name="color"
        items={colors}
        placeholder="Favorite Color"
        inverted={true}
      />
      <AppSubmitButton title="Submit" style={styles.button} />
    </AppForm>
  );
};
