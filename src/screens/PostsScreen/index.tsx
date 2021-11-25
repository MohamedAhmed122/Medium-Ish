/* eslint-disable curly */
import React, {useCallback, useState} from 'react';
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

interface PostsProps {
  navigation: NativeStackNavigationProp<PostParamsList, PostParams.Posts>;
}
export const Posts: React.FC<PostsProps> = ({navigation}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const {postsLoading, posts, postError} = useGetPosts();

  const handleNavigate = (id: string): void =>
    navigation.navigate(PostParams.PostDetail, {id});

  const handleToggleModal = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

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
