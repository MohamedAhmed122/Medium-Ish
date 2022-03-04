import React from 'react';

import {initialFormValues} from '@Types/Form';

import {
  AppForm,
  AppInputField,
  AppSubmitButton,
  AppPickerField,
} from '@Components/Form';
import {RichTextEditor} from '@Components/RichText';
import {AvoidingKeyboardView} from '@Commons/AvoidingKeyboardView';
import {createPostValidationSchema as validationSchema} from '@Utils/validationSchema';

import t from '@Lib/i18n';
import {categories} from '@Assets/data';
import styles from './styles';

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
        <AppInputField name="title" placeholder={t.inputs.title} />
        <AppInputField
          multiline
          inputContainerStyle={styles.textarea}
          name="description"
          placeholder={t.inputs.description}
        />
        <RichTextEditor handleOnHtmlChange={setTextEditor} />
        <AppPickerField
          name="categories"
          items={categories}
          placeholder={t.inputs.categories}
        />
        <AppSubmitButton title={t.createArticle} loading={loading} />
      </AppForm>
    </AvoidingKeyboardView>
  );
};
