/* eslint-disable curly */
import React, {useState} from 'react';
// TYPES
import {
  PostParamsList,
  PostParams,
} from '../../navigation/AppNavigation/interface';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Post} from './Post';
// GRAPHQL
import {useGetPosts} from '@GraphQL/query';
// RENDER
import {FlatList} from 'react-native';
import {Error, AppLoading, Screen, AppButton} from '@Commons/index';
import {AppModal} from '@Components/Modal';
import {COLORS} from '@Styles/index';

interface PostsProps {
  navigation: NativeStackNavigationProp<PostParamsList, PostParams.Posts>;
}
export const Posts: React.FC<PostsProps> = ({navigation}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const {postsLoading, posts, postError} = useGetPosts();

  const handleNavigate = (id: string): void =>
    navigation.navigate(PostParams.PostDetail, {id});

  const handleToggleModal = (): void => setIsVisible(!isVisible);

  if (postsLoading) return <AppLoading />;
  if (postError || !posts) return <Error />;

  return (
    <Screen>
      <FlatList
        ListHeaderComponent={() => (
          <AppButton
            title="Create Post"
            onPress={handleToggleModal}
            color={COLORS.secondary}
          />
        )}
        renderItem={({item}) => (
          <Post item={item} handleNavigate={handleNavigate} />
        )}
        data={posts.getPosts}
        keyExtractor={item => item.id}
        ListFooterComponent={() => (
          <AppModal
            handleCloseModal={handleToggleModal}
            isVisible={isVisible}
          />
        )}
      />
    </Screen>
  );
};
