import React, {useState} from 'react';
import {Screen} from '@Commons/Screen';

import {ArticleForm} from './ArticleForm';

export function CreateArticle() {
  const [textEditor, setTextEditor] = useState<{html: string}>();
  console.log(textEditor);
  return (
    <Screen scroll scrollContainerStyle={{marginTop: 20}}>
      <ArticleForm setTextEditor={setTextEditor} />
    </Screen>
  );
}
