import {gql} from 'graphql-tag';

export const DELETE_ARTICLE = gql`
  mutation deleteArticle($id: ID!) {
    deleteArticle(where: {id: $id}) {
      id
    }
  }
`;
