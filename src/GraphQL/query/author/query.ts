import {gql} from '@apollo/client';
import {fragmentsField} from '@GraphQL/types';
import {CORE_AUTHORS_FIELDS} from '@GraphQL/fragments';

export const GET_AUTHORS = gql`
    query getAuthors {
        authors{
        ...${fragmentsField.author}
        }
    }
    ${CORE_AUTHORS_FIELDS}
`;
