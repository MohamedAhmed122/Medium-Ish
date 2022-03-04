import React from 'react';

import {initialFormValues} from '@Types/Form';

import {
  AppForm,
  AppInputField,
  AppPickerField,
  AppSubmitButton,
} from '@Components/Form';

import t from '@Lib/i18n';
import {colors} from '@Assets/data';
import styles from './styles';

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
        placeholder={t.inputs.bio}
        inputContainerStyle={styles.textarea}
      />
      <AppPickerField
        name="color"
        items={colors}
        placeholder={t.inputs.color}
        inverted={true}
      />
      <AppSubmitButton
        title={t.submit}
        style={styles.button}
        loading={loading}
      />
    </AppForm>
  );
};
