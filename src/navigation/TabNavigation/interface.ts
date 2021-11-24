import {NavigatorScreenParams} from '@react-navigation/native';
import {PostParamsList} from '../AppNavigation/interface';

export type NO_PARAMS = undefined;

export enum TabParams {
  Post = 'PostTab',
  Search = 'Search',
  CreatePost = 'CreatePost',
  UserList = 'UserList',
  Settings = 'Settings',
}
export type TabParamList = {
  PostTab: NavigatorScreenParams<PostParamsList>;
  Search: NO_PARAMS;
  CreatePost: NO_PARAMS;
  UserList: NO_PARAMS;
  Settings: NO_PARAMS;
};
