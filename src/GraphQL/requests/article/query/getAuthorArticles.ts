import {gql} from 'graphql-tag';
import {CORE_ARTICLE_FIELDS} from '@GraphQL/fragments';
import {fragmentsField} from '@GraphQL/types';

export const GET_ARTICLES_BY_AUTHOR_ID = gql`
  query getArticleByAuthorId($id: ID!) {
    articles(where: {author: {id: $id}}) {
        ...${fragmentsField.article}
    }
  }
  ${CORE_ARTICLE_FIELDS}
`;
