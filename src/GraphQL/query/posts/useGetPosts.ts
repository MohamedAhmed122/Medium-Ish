import {Post} from './interface';
import {ApolloError, useQuery} from '@apollo/client';
import {GET_POSTS} from './index';

export interface Posts {
  getPosts: Post[];
}

interface UseGetPosts {
  postsLoading: boolean;
  posts?: Posts;
  postError?: ApolloError;
}

export const useGetPosts = (): UseGetPosts => {
  const {loading, data, error} = useQuery<Posts>(GET_POSTS);
  return {postsLoading: loading, posts: data, postError: error};
};
