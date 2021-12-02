import {gql} from '@apollo/client';

export const CREATE_COMMENT = gql`
  mutation createComment($id: ID!, $comment: String!, $username: String!) {
    updateArticle(
      data: {comment: {create: {comment: $comment, username: $username}}}
      where: {id: $id}
    ) {
      comment {
        id
        username
        comment
      }
    }
  }
`;
