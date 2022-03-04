import {gql} from 'graphql-tag';
import {fragmentsField} from '@GraphQL/types';
import {CORE_AUTHORS_FIELDS} from '@GraphQL/fragments';

// GET -> All Author
export const GET_AUTHORS = gql`
    query getAuthors {
        authors(where: {article_every: {description_contains: " "}}){
        ...${fragmentsField.author}
        }
    }
    ${CORE_AUTHORS_FIELDS}
`;
