import {AppText, AppTextProps} from '@Commons/AppText';
import React from 'react';

interface Props extends AppTextProps {
  substring: number;
  text: string;
}
export const AppResizedText: React.FC<Props> = ({
  substring,
  text,
  ...props
}) => {
  return (
    <AppText {...props}>
      {text?.length > substring
        ? text?.substring(0, substring - 3) + '....'
        : text}
    </AppText>
  );
};
