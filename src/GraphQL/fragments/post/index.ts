import {fragmentsField, typename} from '@GraphQL/types';
import {gql} from '@apollo/client';

export const CORE_POST_FIELDS = gql`
  fragment ${fragmentsField.post} on ${typename.post} {
    id
    body
    createdAt
    username
  }
`;
