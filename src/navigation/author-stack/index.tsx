import React from 'react';
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {AuthorParams, AuthorParamList} from './interface';
//SCREENS
import {
  AuthorArticles,
  AuthorLocation,
  AuthorProfile,
  EditProfile,
} from '@Screens/Author';

const Stack = createNativeStackNavigator<AuthorParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={AuthorParams.AuthorProfile}
        component={AuthorProfile}
      />
      <Stack.Screen name={AuthorParams.EditProfile} component={EditProfile} />
      <Stack.Screen
        name={AuthorParams.AuthorArticles}
        component={AuthorArticles}
      />
      <Stack.Screen
        name={AuthorParams.AuthorLocation}
        component={AuthorLocation}
      />
    </Stack.Navigator>
  );
};
