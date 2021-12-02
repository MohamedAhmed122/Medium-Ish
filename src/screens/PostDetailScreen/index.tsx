import React from 'react';
// TYPES
import {RouteProp} from '@react-navigation/core';
import {
  PostParamsList,
  PostParams,
} from '../../navigation/AppNavigation/interface';

import {
  Screen,
  //  AppLoading, Error, Empty
} from '@Commons/index';
import {useGetArticleById} from '@GraphQL/query';
// import {PostDetail, Comment, CommentList} from './components';
// import {FlatList} from 'react-native';

// import styles from './styles'

interface PostDetailsProps {
  route: RouteProp<PostParamsList, PostParams.PostDetail>;
}
export const PostDetails: React.FC<PostDetailsProps> = ({route}) => {
  const {id} = route.params;
  // const {post, loading, error} = useGetPost(id);
  const {data, loading, error} = useGetArticleById(id);
  console.log(data?.article.description, loading, error, 'here---');

  console.log(id, 'here');

  return (
    <Screen>
      {/* <FlatList
        ListHeaderComponent={() => (
          <>
            <PostDetail post={post.getPost} />
            <Comment />
          </>
        )}
        ListEmptyComponent={() => (
          <Empty message="No Comments, Feel free to create the first comment)" />
        )}
        data={post.getPost.comments}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CommentList comment={item} />}
      /> */}
    </Screen>
  );
};
