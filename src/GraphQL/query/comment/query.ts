import {fragmentsField} from '@GraphQL/types';
import {CORE_COMMENT_FIELDS} from '@GraphQL/fragments';
import {gql} from '@apollo/client';

export const CREATE_COMMENT = gql`
  mutation createComment(
    $articleId: ID!
    $comment: String!
    $username: String!
  ) {
    createComment(
      data: {
        article: {connect: {id: $articleId}}
        comment: $comment
        username: $username
      }
    ) {
      ...${fragmentsField.comment}
    }
  }
  ${CORE_COMMENT_FIELDS}
`;
