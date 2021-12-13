import {fragmentsField} from '@GraphQL/types';
import {CORE_AUTHORS_FIELDS} from '@GraphQL/fragments';
import {gql} from 'graphql-tag';

// UPDATE -> Initiation/Add  Author Avatar
export const UPDATE_AUTHOR_AVATAR = gql`
  mutation updateAuthorAvatar($id: ID!, $imageUrl: String!) {
    updateAuthor(data: {imageUrl: $imageUrl}, where: {id: $id}) {
      imageUrl
    }
  }
`;

// UPDATE -> Initiation/Add  Author info
export const UPDATE_AUTHOR_INFO = gql`
  mutation updateAuthorInfo($id: ID!, $hex: Hex!, $bio: String!) {
    updateAuthor(data: {bio: $bio, color: {hex: $hex}}, where: {id: $id}) {
     ...${fragmentsField.author}
    }
  }
  ${CORE_AUTHORS_FIELDS}
`;

// UPDATE ->  Initiation/Add  Author Location
export const UPDATE_AUTHOR_LOCATION = gql`
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

// UPDATE ->  Edit  Author Data
export const UPDATE_AUTHOR_DATA = gql`
  mutation updateAuthorInfo(
    $id: ID!
    $name: String
    $email: String
    $hex: Hex
    $bio: String
  ) {
    updateAuthor(
      data: {name: $name, email: $email, bio: $bio, color: {hex: $hex}}
      where: {id: $id}
    ) {
      id
    }
  }
`;
