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
  loading: boolean;
}

export const FromBio: React.FC<Props> = ({handleSubmit, loading}) => {
  return (
    <AppForm
      initialValues={{bio: '', color: null}}
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
      <AppSubmitButton title="Submit" style={styles.button} loading={loading} />
    </AppForm>
  );
};
