import {gql} from 'graphql-tag';
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
