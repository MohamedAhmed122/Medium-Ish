import {gql} from '@apollo/client';
import {fragmentsField} from '@GraphQL/types';
import {CORE_AUTHORS_FIELDS} from '@GraphQL/fragments';

export const SEARCH_ARTICLES = gql`
  query searchArticles($title: String!) {
    articles(where: {title_contains: $title}) {
        id
        title
        createdAt
        description
        author{
            ...${fragmentsField.author}
        }
    }
  }
  ${CORE_AUTHORS_FIELDS}
`;
