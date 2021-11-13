import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import {Text, View} from 'react-native';
import {useGetPosts} from '../../GraphQL/query';

interface PostsProps {}
export const Posts: React.FC<PostsProps> = () => {
  const {postsLoading, posts, postError} = useGetPosts();
  const {loading, error, data} = useQuery(GET);

  console.log(loading, error, data, 'number1');

  console.log(postsLoading, posts, postError, 'number2');
  return (
    <View>
      <Text>Posts</Text>
    </View>
  );
};

const GET = gql`
  query getAllPosts {
    getPosts {
      id
      body
    }
  }
`;
