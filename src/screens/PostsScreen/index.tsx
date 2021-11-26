/* eslint-disable curly */
import React from 'react';
// TYPES
import {
  PostParamsList,
  PostParams,
} from '../../navigation/AppNavigation/interface';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {UserList} from './UserList';
import {PostCard} from '@Components/PostCard';
// GRAPHQL
import {useGetPosts} from '@GraphQL/query';
// RENDER
import {FlatList} from 'react-native';
import {Error, AppLoading, Screen} from '@Commons/index';
import {AppModal} from '@Components/Modal';
import styles from './styles';
import {useToggleButton} from '@Hooks/useToggle';

interface PostsProps {
  navigation: NativeStackNavigationProp<PostParamsList, PostParams.Posts>;
}
export const Posts: React.FC<PostsProps> = ({navigation}) => {
  const {postsLoading, posts, postError} = useGetPosts();

  const {value: isVisible, toggleButton: handleToggleModal} = useToggleButton();

  const handleNavigate = (id: string): void =>
    navigation.navigate(PostParams.PostDetail, {id});

  console.log(postError, 'error');
  if (postsLoading) return <AppLoading />;
  if (postError || !posts) return <Error />;
  let flatData = [1, 2, 3, 4, 5];

  return (
    <Screen>
      <FlatList
        ListHeaderComponentStyle={styles.header}
        ListHeaderComponent={() => (
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(_, index) => index.toString()}
            data={flatData}
            renderItem={({item, index}) => <UserList index={index} />}
          />
        )}
        renderItem={({item}) => (
          <PostCard item={item} handleNavigate={handleNavigate} />
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
