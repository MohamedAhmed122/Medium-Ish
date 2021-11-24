import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabParams, TabParamList} from './interface';
import {PostNavigator} from '../PostNavigator';
import {CreatePost} from '@Screens/CreatePostScreen';
import {UserList} from '@Screens/UserListScreen';
import {SettingScreen} from '@Screens/SettingsScreen';
import {SearchScreen} from '@Screens/SearchScreen';

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={TabParams.Post} component={PostNavigator} />
      <Tab.Screen name={TabParams.Search} component={SearchScreen} />
      <Tab.Screen name={TabParams.CreatePost} component={CreatePost} />
      <Tab.Screen name={TabParams.UserList} component={UserList} />
      <Tab.Screen name={TabParams.Settings} component={SettingScreen} />
    </Tab.Navigator>
  );
};
