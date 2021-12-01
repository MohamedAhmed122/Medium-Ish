import {gql} from 'graphql-tag';
import {CORE_ARTICLE_FIELDS, CORE_AUTHORS_FIELDS} from '@GraphQL/fragments';
import {fragmentsField} from '@GraphQL/types';

export const GET_ARTICLES = gql`
    query getArticles {
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

export const GET_SINGLE_ARTICLE = gql`
    query getArticleById($id: ID!){
        article (where :{id : $id}) {
            ...${fragmentsField.article}
            richDescription{
                html
            }
            author{
                ...${fragmentsField.author}
            }
        }
    }
    ${CORE_ARTICLE_FIELDS}
    ${CORE_AUTHORS_FIELDS}
`;

export const LIKE_ARTICLE = gql`
  mutation likeSong($id: ID!, $likes: Number!) {
    updateArticle(data: {likes: $likes}, where: {id: $id}) {
      likes
    }
  }
`;

// export const updateArticle = gql`
//     mutation updateArticle()
// `
