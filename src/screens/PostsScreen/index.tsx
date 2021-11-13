/* eslint-disable curly */
import React from 'react';
import {FlatList} from 'react-native';
import {Error, AppLoading, Screen, AppButton} from '@Commons/index';
import {useGetPosts} from '@GraphQL/query';
import {COLORS} from '@Styles/index';
import {Post} from './Post';

interface PostsProps {}
export const Posts: React.FC<PostsProps> = () => {
  const {postsLoading, posts, postError} = useGetPosts();

  if (postsLoading) return <AppLoading />;
  if (postError || !posts) return <Error />;

  return (
    <Screen>
      <FlatList
        ListHeaderComponent={() => (
          <AppButton
            title="Create Post"
            onPress={() => {}}
            color={COLORS.secondary}
          />
        )}
        renderItem={({item}) => <Post item={item} />}
        data={posts.getPosts}
        keyExtractor={item => item.id}
      />
    </Screen>
  );
};
