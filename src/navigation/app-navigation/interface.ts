import {StackNavigationProp} from '@react-navigation/stack';
import {
  NavigatorScreenParams,
  CompositeNavigationProp,
} from '@react-navigation/native';
import {AuthParamList} from '../auth-stack/interface';
import {TabParamList} from '../tab-navigation/interface';

export type NO_PARAMS = undefined;

export enum PostParams {
  Posts = 'Posts',
  PostDetail = 'PostDetail',
  Settings = 'Settings',
}

export type PostParamsList = {
  Posts: NO_PARAMS;
  PostDetail: {id: string};
  Settings: NO_PARAMS;
};

export enum AppNavigationParams {
  Welcome = 'Welcome',
  TabNavigation = 'TabNavigation',
  AuthNavigation = 'AuthNavigation',
}

export type AppNavigationParamList = {
  Welcome: NO_PARAMS;
  TabNavigation: NavigatorScreenParams<TabParamList>;
  AuthNavigation: NavigatorScreenParams<AuthParamList>;
};

export type RootNavigation = CompositeNavigationProp<
  StackNavigationProp<AppNavigationParamList, AppNavigationParams>,
  StackNavigationProp<AuthParamList>
>;
