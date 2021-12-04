import {gql} from 'graphql-tag';

export const GET_ARTICLES_BY_AUTHOR_ID = gql`
  query getArticleByAuthorId($id: ID!) {
    articles(where: {author: {id: $id}}) {
      id
    }
  }
`;
