/* eslint-disable curly */
import {FlatList, FlatListProps} from 'react-native';
import React from 'react';
import {AppLoading} from '@Commons/AppLoading';

export interface Props<ItemT = any> extends FlatListProps<ItemT> {
  loading: boolean;
}

export const FeaturedFlatList: React.FC<Props> = ({loading, ...props}) => {
  if (loading) return <AppLoading />;
  return <FlatList {...props} />;
};
