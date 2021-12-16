import {gql} from 'graphql-tag';
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
