import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AppNavigation} from './src/navigation';
import {ApolloProvider} from '@apollo/client';
import {client} from '@GraphQL/Apollo';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
      <Toast position="bottom" />
    </ApolloProvider>
  );
}
