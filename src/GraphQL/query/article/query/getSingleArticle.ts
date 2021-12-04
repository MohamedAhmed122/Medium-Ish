import {gql} from 'graphql-tag';
import {
  CORE_ARTICLE_FIELDS,
  CORE_AUTHORS_FIELDS,
  CORE_COMMENT_FIELDS,
} from '@GraphQL/fragments';
import {fragmentsField} from '@GraphQL/types';

export const GET_SINGLE_ARTICLE = gql`
    query getArticleById($id: ID!){
      article (where :{id : $id}) {
        ...${fragmentsField.article}
        richDescription{
          html
        }
        author{
          ...${fragmentsField.author}
        }
        comments {
          ...${fragmentsField.comment}
        }
      }
    }
    ${CORE_ARTICLE_FIELDS}
    ${CORE_AUTHORS_FIELDS}
    ${CORE_COMMENT_FIELDS}
`;
