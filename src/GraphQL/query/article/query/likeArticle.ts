import {gql} from 'graphql-tag';
export const LIKE_ARTICLE = gql`
  mutation likeSong($id: ID!, $likes: Int!) {
    updateArticle(data: {likes: $likes}, where: {id: $id}) {
      likes
    }
  }
`;
