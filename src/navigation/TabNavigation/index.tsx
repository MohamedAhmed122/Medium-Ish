import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabParamList} from './interface';

import {tabs} from './tabs';
import {COLORS} from '@Styles/colors';

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: COLORS.lightGrey,
        tabBarActiveTintColor: COLORS.primary,
      }}>
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.id}
          name={tab.name}
          component={tab.component}
          options={tab.options}
        />
      ))}
    </Tab.Navigator>
  );
};
