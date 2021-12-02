// import { CORE_ARTICLE_FIELDS } from './../../fragments/article/index';
import {gql} from '@apollo/client';
import {fragmentsField} from '@GraphQL/types';
import {
  CORE_AUTHORS_FIELDS,
  CORE_AUTHOR_DETAIL_FIELDS,
  CORE_ARTICLE_FIELDS,
} from '@GraphQL/fragments';

// GET -> All Author
export const GET_AUTHORS = gql`
    query getAuthors {
        authors{
        ...${fragmentsField.author}
        }
    }
    ${CORE_AUTHORS_FIELDS}
`;

// GET -> one Author by id
export const GET_SINGLE_AUTHOR = gql`
  query getAuthById($id: ID!) {
    author(where: {id: $id}) {
        ...${fragmentsField.author}
        ...${fragmentsField.authorDetail}
        article{
            ...${fragmentsField.article}
        }
    }
  }
  ${CORE_ARTICLE_FIELDS}
  ${CORE_AUTHORS_FIELDS}
  ${CORE_AUTHOR_DETAIL_FIELDS}
`;

// CREATE -> Create Author
export const INITIATE_AUTHOR = gql`
  mutation initiateAuthor($username: String!, $name: String!, $email: String!) {
    createAuthor(data: {email: $email, name: $name, username: $username}) {
      id
      email
      name
      username
    }
  }
`;

// UPDATE -> Initiation/Add  Author Avatar
export const UPDATE_AUTHOR_AVATAR = gql`
  mutation updateAuthorAvatar($id: ID!, $imageURL: String!) {
    updateAuthor(data: {imageUrl: $imageURL}, where: {id: $id}) {
      imageURL
    }
  }
`;

// UPDATE -> Initiation/Add  Author Image
export const UPDATE_AUTHOR_IMAGE = gql`
  mutation updateAuthorImage($id: ID!, $handle: String!, $fileName: String!) {
    updateAuthor(
      data: {image: {create: {handle: $handle, fileName: $fileName}}}
      where: {id: $id}
    ) {
      image {
        url
      }
    }
  }
`;

// UPDATE -> Initiation/Add  Author info
export const UPDATE_AUTHOR_INFO = gql`
  mutation updateAuthorInfo($id: ID!, $hex: String!, $bio: String!) {
    updateAuthor(data: {bio: $bio, color: {hex: $hex}}, where: {id: $id}) {
      bio
      color {
        hex
      }
    }
  }
`;

// UPDATE ->  Initiation/Add  Author Location
export const UPDATE_AUTHOR_Location = gql`
  mutation updateAuthorInfo($id: ID!, $latitude: Int!, $longitude: Int!) {
    updateAuthor(
      data: {location: {latitude: $latitude, longitude: $longitude}}
      where: {id: $id}
    ) {
      location {
        latitude
        longitude
      }
    }
  }
`;
