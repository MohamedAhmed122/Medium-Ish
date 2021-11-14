import {ApolloError, useQuery} from '@apollo/client';
import {PostDetail} from '@GraphQL/query';
import {GET_SINGLE_POST} from './index';

export interface GetPost {
  getPost: PostDetail;
}

interface UseGetPost {
  post?: GetPost;
  error?: ApolloError;
  loading: boolean;
}

export const useGetPost = (postId: string): UseGetPost => {
  const {data, error, loading} = useQuery<GetPost, {postId: string}>(
    GET_SINGLE_POST,
    {variables: {postId}},
  );
  return {post: data, error, loading};
};
