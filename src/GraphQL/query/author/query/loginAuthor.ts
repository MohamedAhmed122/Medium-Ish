import {gql} from '@apollo/client';

import {CORE_AUTHORS_FIELDS} from '@GraphQL/fragments';
import {fragmentsField} from '@GraphQL/types';

export const LOGIN_AUTHOR = gql`
  query loginAuthor($username: String!) {
    author(where: {username: $username}) {
        ...${fragmentsField.author}
    }
  }
  ${CORE_AUTHORS_FIELDS}
`;
