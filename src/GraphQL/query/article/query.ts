import {gql} from 'graphql-tag';
import {
  CORE_ARTICLE_FIELDS,
  CORE_AUTHORS_FIELDS,
  CORE_COMMENT_FIELDS,
} from '@GraphQL/fragments';
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
        comment {
          ...${fragmentsField.comment}
        }
      }
    }
    ${CORE_ARTICLE_FIELDS}
    ${CORE_AUTHORS_FIELDS}
    ${CORE_COMMENT_FIELDS}
`;

export const GET_ARTICLES_BY_AUTHOR_ID = gql`
  query getArticleByAuthorId($id: ID!) {
    articles(where: {author: {id: $id}}) {
      id
    }
  }
`;

export const LIKE_ARTICLE = gql`
  mutation likeSong($id: ID!, $likes: Int!) {
    updateArticle(data: {likes: $likes}, where: {id: $id}) {
      likes
    }
  }
`;

export const CREATE_ARTICLE = gql`
  mutation createArticle(
    $authorId: ID!
    $username: String!
    $categoryId: ID!
    $title: String!
    $description: String!
    $richDescription: RichText!
  ) {
    createArticle(
      data: {
        title: $title
        description: $description
        richDescription: $richDescription
        author: {connect: {id: $authorId, username: $username}}
        category: {connect: {id: $categoryId}}
      }
    ) {
      ...${fragmentsField.article}
    }
  }
  ${CORE_ARTICLE_FIELDS}
`;

export const UPDATE_ARTICLE = gql`
  mutation updateArticle(
    $id: ID!
    $description: String!
    $title: String!
    $richDescription: RichText!
  ) {
    updateArticle(
      data: {
        description: $description
        title: $title
        richDescription: $richDescription
      }
      where: {id: $id}
    ) {
     ...${fragmentsField.article}
    }
  }
  ${CORE_ARTICLE_FIELDS}
`;

export const DELETE_ARTICLE = gql`
  mutation deleteArticle($id: ID!) {
    deleteArticle(where: {id: $id}) {
      id
    }
  }
`;

// article:"ckwofi8j415xi0a37tecpx5rf"
