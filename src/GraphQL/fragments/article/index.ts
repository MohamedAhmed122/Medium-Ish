import {fragmentsField, typename} from '@GraphQL/types';
import {gql} from '@apollo/client';

export const CORE_ARTICLE_FIELDS = gql`
  fragment ${fragmentsField.article} on ${typename.article} {
    id
    description
    slug
    likes
    title
    isOnWatchList @client
    watchList @client
    category{
      id
      label
      icon
      color{
        hex
      }
    }
   
  }
`;

export const ARTICLE_WATCH_LIST = gql`
  fragment ${fragmentsField.watchList} on ${typename.article} {
    watchList
  }
`;
