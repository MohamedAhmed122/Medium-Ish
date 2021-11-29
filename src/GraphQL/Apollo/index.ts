import {ApolloClient, from} from '@apollo/client';
import {httpLink, errorLink} from './link';
import {cache} from './cache';

export const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache,
});
