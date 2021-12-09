import React from 'react';
import {
  AppForm,
  AppInputField,
  AppSubmitButton,
  AppPickerField,
} from '@Components/Form';
import {createPostValidationSchema as validationSchema} from '@Utils/validationSchema';
import {RichTextEditor} from '@Components/RichText';
import {categories} from '@Assets/data';
import styles from './styles';

interface Props {
  setTextEditor(obj: {html: string}): void;
}

export const ArticleForm: React.FC<Props> = ({setTextEditor}) => {
  return (
    <AppForm
      validationSchema={validationSchema}
      onSubmit={() => {}}
      initialValues={{
        title: '',
        description: '',
        // additionalDescription: '',
        categories: null,
      }}>
      <AppInputField name="title" placeholder="Post Title" />
      <AppInputField
        multiline
        inputContainerStyle={styles.textarea}
        name="description"
        placeholder="Post Description"
      />
      {/* <AppInputField
        multiline
        inputContainerStyle={styles.textarea}
        name="additionalDescription"
        placeholder="More Description"
      /> */}
      <RichTextEditor handleOnHtmlChange={setTextEditor} />
      <AppPickerField
        name="categories"
        items={categories}
        placeholder="Categories"
      />
      <AppSubmitButton title="Create Post" />
    </AppForm>
  );
};
