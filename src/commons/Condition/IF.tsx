import React from 'react';
import {ICondition} from '@Types/Condition';

export const IF: React.FC<ICondition> = ({condition, children}) => {
  // eslint-disable-next-line curly
  if (condition) return <>{children}</>;
  return null;
};
