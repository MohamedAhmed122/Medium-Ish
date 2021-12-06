import {fragmentsField} from '@GraphQL/types';
import {CORE_COMMENT_FIELDS} from '@GraphQL/fragments';
import {gql} from '@apollo/client';

export const CREATE_COMMENT = gql`
  mutation createComment(
    $id: ID!
    $comment: String!
    $username: String!
    $imageUrl: String!
  ) {
    createComment(
      data: {
        article: {connect: {id: $id}}
        comment: $comment
        username: $username
      }
    ){
        createComment{

        ...${fragmentsField.comment}
        }
    }
  }
  ${CORE_COMMENT_FIELDS}
`;
