import React from 'react';
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {AppNavigationParams, AppNavigationParamList} from './interface';
// Navigation
import {TabNavigation} from '../tab-navigation';
import {AuthNavigator} from '../auth-stack';
import {WelcomeScreen} from '@Screens/WelcomeScreen';

const Stack = createNativeStackNavigator<AppNavigationParamList>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={AppNavigationParams.Welcome}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name={AppNavigationParams.TabNavigation}
        component={TabNavigation}
      />
      <Stack.Screen
        name={AppNavigationParams.AuthNavigation}
        component={AuthNavigator}
      />
    </Stack.Navigator>
  );
};
