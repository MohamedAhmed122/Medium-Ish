import {gql} from 'graphql-tag';
import {fragmentsField} from '@GraphQL/types';
import {
  CORE_AUTHORS_FIELDS,
  CORE_AUTHOR_DETAIL_FIELDS,
  CORE_ARTICLE_FIELDS,
} from '@GraphQL/fragments';

// GET -> one Author by id
export const GET_SINGLE_AUTHOR = gql`
  query getAuthById($id: ID!) {
    author(where: {id: $id}) {
        ...${fragmentsField.author}
        ...${fragmentsField.authorDetail}
        article{
            ...${fragmentsField.article}
        }
    }
  }
  ${CORE_ARTICLE_FIELDS}
  ${CORE_AUTHORS_FIELDS}
  ${CORE_AUTHOR_DETAIL_FIELDS}
`;
