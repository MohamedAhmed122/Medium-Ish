import {AuthorParams} from '@Navigation/author-stack/interface';
export {AppNavigation} from './app-navigation';
import {AppNavigationParams} from './app-navigation/interface';
import {AuthParams} from './auth-stack/interface';
import {ArticleParams} from './article-stack/interface';
import {TabParams} from './tab-navigation/interface';

export const Navigators = {
  App: AppNavigationParams,
  AuthStack: AuthParams,
  ArticleStack: ArticleParams,
  AuthorStack: AuthorParams,
  Tab: TabParams,
};
