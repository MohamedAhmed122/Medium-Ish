import React from 'react';

import {TabParams} from './interface';
import {ArticleNavigator} from '../ArticleNavigator';
import {CreatePost} from '@Screens/CreatePostScreen';
import {UserWatchListScreen} from '@Screens/UserWatchListScreen';
// import {SettingScreen} from '@Screens/SettingsScreen';
import {SearchScreen} from '@Screens/SearchScreen';
import {AuthorProfile} from '@Screens/Author';

// ICONS && STYLES
import {scale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TabBarIcon} from '@Components/TabBar';

export const tabs = [
  {
    id: 1,
    component: ArticleNavigator,
    name: TabParams.Article,
    options: {
      title: 'POSTS',
      tabBarIcon: ({color}: {color: string}) => (
        <MaterialIcons name="article" size={scale(27)} color={color} />
      ),
    },
  },
  {
    id: 2,
    component: SearchScreen,
    name: TabParams.Search,
    options: {
      title: 'SEARCH',
      tabBarIcon: ({color}: {color: string}) => (
        <MaterialCommunityIcons
          name="text-search"
          size={scale(29)}
          color={color}
        />
      ),
    },
  },
  {
    id: 3,
    component: CreatePost,
    name: TabParams.CreatePost,
    options: {
      title: '',
      tabBarIcon: () => {
        return <TabBarIcon />;
      },
    },
  },
  {
    id: 4,
    component: UserWatchListScreen,
    name: TabParams.UserList,
    options: {
      title: 'LIST',
      tabBarIcon: ({color}: {color: string}) => (
        <FontAwesome name="bookmark" size={29} color={color} />
      ),
    },
  },

  {
    id: 5,
    component: AuthorProfile,
    name: TabParams.AuthorProfile,
    options: {
      title: 'PROFILE',
      tabBarIcon: ({color}: {color: string}) => (
        <MaterialIcons name="person-pin" size={scale(29)} color={color} />
      ),
    },
  },
];
