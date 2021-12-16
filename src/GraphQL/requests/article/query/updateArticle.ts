import {CORE_ARTICLE_FIELDS} from '@GraphQL/fragments';
import {fragmentsField} from '@GraphQL/types';
import {gql} from 'graphql-tag';

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
