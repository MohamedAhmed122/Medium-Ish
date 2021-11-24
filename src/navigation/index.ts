export {AppNavigation} from './AppNavigation';
import {AppNavigationParams} from './AppNavigation/interface';
import {AuthParams} from './AuthNavigator/interface';
import {PostParams} from './AppNavigation/interface';
import {TabParams} from './TabNavigation/interface';

export const Navigators = {
  App: AppNavigationParams,
  AuthStack: AuthParams,
  PostStack: PostParams,
  Tab: TabParams,
};
