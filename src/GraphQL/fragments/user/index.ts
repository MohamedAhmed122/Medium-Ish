import {gql} from '@apollo/client';
import {fragmentsField, typename} from '@GraphQL/types';

export const CORE_USER_FIELDS = gql`
    fragment ${fragmentsField.user} on ${typename.user}{
        token
        username
        id
        email
        createdAt
    }
`;
