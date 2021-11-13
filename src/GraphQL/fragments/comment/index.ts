import {fragmentsField, typename} from '@GraphQL/types';
import {gql} from '@apollo/client';

export const CORE_COMMENT_FIELDS = gql`
  fragment ${fragmentsField.comment} on ${typename.comment} {
    id
    body
    createdAt
    username
`;
