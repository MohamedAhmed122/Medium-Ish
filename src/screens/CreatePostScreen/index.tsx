import React from 'react';
import {Screen} from '@Commons/Screen';

import {PostForm} from './PostForm';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/client';

export function CreatePost() {
  const QUERY = gql`
    query getArticle($id: ID!) {
      article(where: {id: $id}) {
        id
      }
    }
  `;
  const {loading, error, data} = useQuery(QUERY, {
    variables: {id: 'ckwi0ira02vuz0b907llv4dis'},
  });

  console.log(loading, error, data);
  return (
    <Screen>
      <PostForm />
    </Screen>
  );
}
