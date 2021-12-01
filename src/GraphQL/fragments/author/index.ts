import {fragmentsField, typename} from '@GraphQL/types';
import {gql} from '@apollo/client';

export const CORE_AUTHORS_FIELDS = gql`
  fragment ${fragmentsField.author} on ${typename.author} {
    id
    username
    color {
      hex
    }
    image {
      url
    }
  }
`;

// export const CORE_AUTHOR_DETAIL_FIELDS = gql`
//   fragment ${fragmentsField.author} on ${typename.author} {
//     id
//     username
//     color {
//       hex
//     }
//     image {
//       id
//       url
//     }
//   }
// `;
