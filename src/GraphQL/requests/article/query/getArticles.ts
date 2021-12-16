import {gql} from 'graphql-tag';
import {CORE_ARTICLE_FIELDS, CORE_AUTHORS_FIELDS} from '@GraphQL/fragments';
import {fragmentsField} from '@GraphQL/types';

export const GET_ARTICLES = gql`
    query getArticles @persist {
        articles{
            ...${fragmentsField.article}
            author{
                ...${fragmentsField.author}
            }
        }
    }
    ${CORE_ARTICLE_FIELDS}
    ${CORE_AUTHORS_FIELDS}
`;
