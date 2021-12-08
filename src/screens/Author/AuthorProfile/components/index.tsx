import React from 'react';

import {Screen} from '@Commons/Screen';
import {Header, HeaderProps} from './Header';
import {RowContainer, RowContainerProps} from './Row';

interface Props {
  header: HeaderProps;
  row: RowContainerProps;
}

export const AuthProfileView: React.FC<Props> = ({header, row}) => {
  return (
    <Screen scroll>
      <Header {...header} />
      <RowContainer {...row} />
    </Screen>
  );
};
