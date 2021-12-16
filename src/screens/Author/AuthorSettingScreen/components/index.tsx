import React from 'react';

import {Header, HeaderProps} from './Header';
import {RowContainer, RowContainerProps} from './Row';
import {RefreshControl, ScrollView} from 'react-native';
import {ParamId} from '@Types/Common';
import {ApolloQueryResult} from '@apollo/client';
import {AuthorDetail} from '@GraphQL/requests';

interface Props {
  header: HeaderProps;
  row: RowContainerProps;
  loading: boolean;
  refetch: (variables?: Partial<ParamId> | undefined) => Promise<
    ApolloQueryResult<{
      author: AuthorDetail;
    }>
  >;
}

export const AuthProfileView: React.FC<Props> = ({
  header,
  refetch,
  row,
  loading,
}) => {
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refetch} />
      }>
      <Header {...header} />
      <RowContainer {...row} />
    </ScrollView>
  );
};
