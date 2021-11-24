import React from 'react';
import {ICondition} from '@Types/Condition';

export const When: React.FC<ICondition> = ({children}) => {
  return <>{children}</>;
};

export const OtherWise: React.FC = ({children}) => {
  return <>{children}</>;
};
