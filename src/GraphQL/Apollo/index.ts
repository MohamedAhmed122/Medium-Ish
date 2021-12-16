import {enableFlipperApolloDevtools} from 'react-native-flipper-apollo-devtools';
import {ApolloClient, from} from '@apollo/client';

import {resolvers} from '@GraphQL/resolvers';
import {httpLink, errorLink} from './link';
import {cache} from './cache';

export const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache,
  resolvers,
});

if (__DEV__) {
  enableFlipperApolloDevtools(client);
}
