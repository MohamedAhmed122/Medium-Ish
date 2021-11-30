import React from 'react';
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {AuthParams, AuthParamList} from './interface';
//SCREENS

import {
  RegisterScreen,
  LoginScreen,
  AvatarScreen,
  UserBioScreen,
  UserLocationScreen,
} from '@Screens/Auth';

const Stack = createNativeStackNavigator<AuthParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AuthParams.Login} component={LoginScreen} />
      <Stack.Screen name={AuthParams.Register} component={RegisterScreen} />
      <Stack.Screen name={AuthParams.UserAvatar} component={AvatarScreen} />
      <Stack.Screen name={AuthParams.UserBio} component={UserBioScreen} />
      <Stack.Screen
        name={AuthParams.UserLocation}
        component={UserLocationScreen}
      />
    </Stack.Navigator>
  );
};
