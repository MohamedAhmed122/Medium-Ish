import React from 'react';
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {AuthorParams, AuthorParamList} from './interface';
//SCREENS
import {
  AuthorArticlesScreen,
  AuthorLocationScreen,
  AuthorProfileScreen,
  EditProfileScreen,
  EditImageScreen,
} from '@Screens/Author';

const Stack = createNativeStackNavigator<AuthorParamList>();

export const AuthorNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={AuthorParams.AuthorProfile}
        component={AuthorProfileScreen}
      />
      <Stack.Screen
        name={AuthorParams.EditProfile}
        component={EditProfileScreen}
      />
      <Stack.Screen
        name={AuthorParams.AuthorArticles}
        component={AuthorArticlesScreen}
      />
      <Stack.Screen
        name={AuthorParams.AuthorLocation}
        component={AuthorLocationScreen}
      />
      <Stack.Screen name={AuthorParams.EditImage} component={EditImageScreen} />
    </Stack.Navigator>
  );
};
