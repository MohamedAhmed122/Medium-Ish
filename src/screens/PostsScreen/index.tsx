/* eslint-disable curly */
import React from 'react';
// TYPES
import {
  PostParamsList,
  PostParams,
} from '../../navigation/AppNavigation/interface';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// GRAPHQL
import {useGetPosts} from '@GraphQL/query';
// RENDER
import {FlatList} from 'react-native';
import {Error, AppLoading, Screen, AppButton} from '@Commons/index';
import {COLORS} from '@Styles/index';
import {Post} from './Post';

interface PostsProps {
  navigation: NativeStackNavigationProp<PostParamsList, PostParams.Posts>;
}
export const Posts: React.FC<PostsProps> = ({navigation}) => {
  const {postsLoading, posts, postError} = useGetPosts();

  const handleNavigate = (id: string): void =>
    navigation.navigate(PostParams.PostDetail, {id});

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
        renderItem={({item}) => (
          <Post item={item} handleNavigate={handleNavigate} />
        )}
        data={posts.getPosts}
        keyExtractor={item => item.id}
      />
    </Screen>
  );
};
