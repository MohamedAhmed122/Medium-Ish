import {gql} from 'graphql-tag';

export const ADD_OR_REMOVE_ARTICLE_WaTCH_LIST = gql`
  mutation addOrRemoveArticleToWatchList($articleId: ID!) {
    addOrRemoveArticleToWatchList(articleId: $articleId) @client
  }
`;

export const GET_WATCH_LIST = gql`
  {
    watchListCount @client
  }
`;
