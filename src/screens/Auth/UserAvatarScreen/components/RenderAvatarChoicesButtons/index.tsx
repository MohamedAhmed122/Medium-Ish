/* eslint-disable curly */
import React from 'react';

import {Status} from '@Types/Avatar';
import {AnimatableView, AppButton} from '@Commons/index';

import {COLORS} from '@Styles/colors';
import styles from './styles';

interface Props {
  status: Status;
  onChoiceAvatar(type: Status): void;
}

export const RenderAvatarChoicesButtons: React.FC<Props> = ({
  status,
  onChoiceAvatar,
}) => {
  if (status !== Status.Default) return null;
  return (
    <AnimatableView style={styles.container}>
      <AppButton
        title={'Generate Avatar'}
        onPress={() => onChoiceAvatar(Status.GenerateAvatar)}
      />
      <AppButton
        title={'Upload Image'}
        onPress={() => onChoiceAvatar(Status.UploadImage)}
        color={COLORS.secondary}
      />
    </AnimatableView>
  );
};
