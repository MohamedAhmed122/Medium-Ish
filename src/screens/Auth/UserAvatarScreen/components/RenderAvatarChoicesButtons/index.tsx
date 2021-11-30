/* eslint-disable curly */
import {AppButton} from '@Commons/AppButton';
import {COLORS} from '@Styles/colors';
import {Status} from '@Types/Avatar';
import React from 'react';

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
    <>
      <AppButton
        title={'Generate Avatar'}
        onPress={() => onChoiceAvatar(Status.GenerateAvatar)}
      />
      <AppButton
        title={'Upload Image'}
        onPress={() => onChoiceAvatar(Status.UploadImage)}
        color={COLORS.secondary}
      />
    </>
  );
};
