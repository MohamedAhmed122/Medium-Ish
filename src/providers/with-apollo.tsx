import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {client} from '@GraphQL/Apollo';

export const withApolloProvider = (component: () => React.ReactNode) => () =>
  <ApolloProvider client={client}>{component()}</ApolloProvider>;
