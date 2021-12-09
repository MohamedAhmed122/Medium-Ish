import React, {useState} from 'react';
import {Screen} from '@Commons/Screen';
import {ArticleForm} from './ArticleForm';

import styles from './styles';
import {CreateArticleValue, initialFormValues} from '@Types/Form';
import {useReactiveVar} from '@apollo/client';
import {currentAuthor} from '@GraphQL/Apollo/cache';
import {AppModal} from '@Components/Modal';
import {useToggleButton} from '@Hooks/useToggle';
import {useCreateArticle} from '@GraphQL/query';

export function CreateArticle() {
  const [textEditor, setTextEditor] = useState<string>('');

  const {value: openModal, toggleButton} = useToggleButton(false);

  const currentUser = useReactiveVar(currentAuthor);

  const {createArticle, loading} = useCreateArticle();

  const handleSubmit = (values: initialFormValues) => {
    const newValue = values as CreateArticleValue;
    !currentUser?.id
      ? toggleButton()
      : createArticle({
          variables: {
            authorId: currentUser.id,
            username: currentUser.username,
            categoryId: String(newValue.categories.id),
            title: newValue.title,
            description: newValue.description,
            richDescription: textEditor,
          },
        });
  };

  return (
    <Screen scroll scrollContainerStyle={styles.container}>
      <ArticleForm
        setTextEditor={setTextEditor}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      <AppModal isVisible={openModal} handleCloseModal={toggleButton} />
    </Screen>
  );
}
