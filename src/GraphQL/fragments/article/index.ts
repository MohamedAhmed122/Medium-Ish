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
    category{
      id
      label
      color{
        hex
      }
    }
   
  }
`;
