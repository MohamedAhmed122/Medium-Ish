import React from 'react';
import {useFormikContext} from 'formik';
import {StyleProp, ViewStyle} from 'react-native';
import {AppButton} from '@Commons/index';

interface Props {
  title: string;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export const AppSubmitButton: React.FC<Props> = ({title, color, style}) => {
  const {handleSubmit} = useFormikContext();
  return (
    <AppButton
      title={title}
      color={color}
      style={style}
      onPress={handleSubmit}
    />
  );
};
