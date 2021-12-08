import {StackNavigationProp} from '@react-navigation/stack';
import {NavigatorScreenParams} from '@react-navigation/native';

import {ArticleParamList} from '@Navigation/article-stack/interface';

export type NO_PARAMS = undefined;

export enum TabParams {
  Article = 'ArticleTab',
  Search = 'Search',
  CreatePost = 'CreatePost',
  UserList = 'UserList',
  AuthorProfile = 'AuthorProfile',
}
export type TabParamList = {
  ArticleTab: NavigatorScreenParams<ArticleParamList>;
  Search: NO_PARAMS;
  CreatePost: NO_PARAMS;
  UserList: NO_PARAMS;
  AuthorProfile: NO_PARAMS;
};

export type TabRootNavigation = StackNavigationProp<TabParamList, TabParams>;
