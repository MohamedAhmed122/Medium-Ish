import React from 'react';
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {PostParams, PostParamsList} from './interface';
//SCREENS
import {Posts} from '@Screens/PostsScreen';
import {PostDetails} from '@Screens/PostDetailScreen';

const Stack = createNativeStackNavigator<PostParamsList>();

export const PostNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={PostParams.Posts} component={Posts} />
      <Stack.Screen name={PostParams.PostDetail} component={PostDetails} />
    </Stack.Navigator>
  );
};
