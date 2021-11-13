import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import {Text, View} from 'react-native';
// import styles from './styles'

interface PostsProps {}
export const Posts: React.FC<PostsProps> = () => {
  const GET_POSTS = gql`
    query getPosts {
      getPosts {
        id
        body
      }
    }
  `;

  const {loading, error, data} = useQuery(GET_POSTS);

  console.log(loading, error, data);

  return (
    <View>
      <Text>Posts</Text>
    </View>
  );
};
