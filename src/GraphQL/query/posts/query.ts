import {CORE_POST_FIELDS} from '@GraphQL/fragments';
import {fragmentsField} from '@GraphQL/types';
import {gql} from 'graphql-tag';

const GET_POSTS = gql`
    query getAllPosts {
        getPosts{
           ...${fragmentsField.post}
           isInCart @client
        }
    }
    ${CORE_POST_FIELDS}
`;

export {GET_POSTS};
