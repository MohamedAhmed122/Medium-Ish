import {CORE_POST_FIELDS} from '../../fragments/post/index';
import {fragmentsField} from '../../types';
import {gql} from 'graphql-tag';

const GET_POSTS = gql`
    query getAllPosts {
        getPosts{
           ...${fragmentsField.post}
        }
    }
    ${CORE_POST_FIELDS}
`;

export {GET_POSTS};
