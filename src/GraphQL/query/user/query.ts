import {gql} from '@apollo/client';
import {CORE_USER_FIELDS} from '@GraphQL/fragments';
import {fragmentsField} from '@GraphQL/types';

export const LOGIN_USER = gql`
    mutation loginUser($username: String!, $password: String!){
        login(username: $username, password: $password){
            ...${fragmentsField.user}
        }
    }
    ${CORE_USER_FIELDS}
`;

export const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      ...${fragmentsField.user}
    }
  }
  ${CORE_USER_FIELDS}
`;
