import React from 'react';

import {AppNavigation} from '@Navigation/app-navigation';
import Toast from 'react-native-toast-message';

import {withProviders} from './src/providers';

// FIXME: Bug in the WatchList restructure

function App() {
  return (
    <>
      <AppNavigation />
      <Toast position="bottom" />
    </>
  );
}
export default withProviders(App);
