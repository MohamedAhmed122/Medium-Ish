export {AppNavigation} from './AppNavigation';
import {AppNavigationParams} from './AppNavigation/interface';
import {AuthParams} from './AuthNavigator/interface';
import {ArticleParams} from './ArticleNavigator/interface';
import {TabParams} from './TabNavigation/interface';

export const Navigators = {
  App: AppNavigationParams,
  AuthStack: AuthParams,
  ArticleStack: ArticleParams,
  Tab: TabParams,
};
