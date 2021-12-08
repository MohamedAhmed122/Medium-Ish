import React from 'react';
import {
  AppForm,
  AppInputField,
  AppSubmitButton,
  AppPickerField,
} from '@Components/Form';
import {createPostValidationSchema as validationSchema} from '@Utils/validationSchema';
import {categories} from '@Assets/data';
import styles from './styles';

export const PostForm = () => {
  return (
    <AppForm
      validationSchema={validationSchema}
      onSubmit={() => {}}
      initialValues={{
        title: '',
        description: '',
        additionalDescription: '',
        categories: null,
      }}>
      <AppInputField name="title" placeholder="Post Title" />
      <AppInputField
        multiline
        inputContainerStyle={styles.textarea}
        name="description"
        placeholder="Post Description"
      />
      <AppInputField
        multiline
        inputContainerStyle={styles.textarea}
        name="additionalDescription"
        placeholder="More Description"
      />
      <AppPickerField
        name="categories"
        items={categories}
        placeholder="Categories"
      />
      <AppSubmitButton title="Create Post" />
    </AppForm>
  );
};
