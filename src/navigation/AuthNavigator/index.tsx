import React from 'react';
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {AuthParams, AuthParamList} from './interface';
//SCREENS
import {LoginScreen} from '@Screens/LoginScreen';
import {RegisterScreen} from '@Screens/RegisterScreen';

const Stack = createNativeStackNavigator<AuthParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AuthParams.Login} component={LoginScreen} />
      <Stack.Screen name={AuthParams.Register} component={RegisterScreen} />
    </Stack.Navigator>
  );
};
