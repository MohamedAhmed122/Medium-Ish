import React from 'react';
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {ArticleParams, ArticleParamList} from './interface';
//SCREENS
import {Posts} from '@Screens/ArticlesScreen';
import {ArticleDetail} from '@Screens/ArticleDetailScreen';

const Stack = createNativeStackNavigator<ArticleParamList>();

export const ArticleNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ArticleParams.Articles} component={Posts} />
      <Stack.Screen
        name={ArticleParams.ArticleDetail}
        component={ArticleDetail}
      />
    </Stack.Navigator>
  );
};
