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
import {initialFormValues} from '@Types/Form';
import {AvoidingKeyboardView} from '@Commons/AvoidingKeyboardView';

interface Props {
  setTextEditor(html: string): void;
  handleSubmit(values: initialFormValues): void;
  loading: boolean;
}

export const ArticleForm: React.FC<Props> = ({
  setTextEditor,
  handleSubmit,
  loading,
}) => {
  return (
    <AvoidingKeyboardView>
      <AppForm
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={{
          title: '',
          description: '',
          categories: categories[0],
        }}>
        <AppInputField name="title" placeholder="Post Title" />
        <AppInputField
          multiline
          inputContainerStyle={styles.textarea}
          name="description"
          placeholder="Post Description"
        />
        <RichTextEditor handleOnHtmlChange={setTextEditor} />
        <AppPickerField
          name="categories"
          items={categories}
          placeholder="Categories"
        />
        <AppSubmitButton title="Create Post" loading={loading} />
      </AppForm>
    </AvoidingKeyboardView>
  );
};
