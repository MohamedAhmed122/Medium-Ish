import {gql} from 'graphql-tag';
import {CORE_ARTICLE_FIELDS} from '@GraphQL/fragments/article';
import {fragmentsField} from '@GraphQL/types';
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
