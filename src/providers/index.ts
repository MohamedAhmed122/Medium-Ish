import compose from 'compose-function';

import {withNavigationContainer} from './with-navigation';
import {withApolloProvider} from './with-apollo';

export const withProviders = compose(
  withApolloProvider,
  withNavigationContainer,
);
