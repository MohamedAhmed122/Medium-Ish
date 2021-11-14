import {CORE_COMMENT_FIELDS, CORE_POST_FIELDS} from '@GraphQL/fragments';
import {fragmentsField} from '@GraphQL/types';
import {gql} from 'graphql-tag';

export const GET_SINGLE_POST = gql`
    query getPost($postId: ID!) {
        getPost(postId: $postId){
            ...${fragmentsField.post}
            comments{
            ...${fragmentsField.comment}
            }
        }
    }
    ${CORE_POST_FIELDS}
    ${CORE_COMMENT_FIELDS}
`;
