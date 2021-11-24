import React from 'react';
import {ICondition} from '@Types/Condition';

export const IF: React.FC<ICondition> = ({condition, children}) => {
  if (condition) {
    <>{children} </>;
  }
  return null;
};
