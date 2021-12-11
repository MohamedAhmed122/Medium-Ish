import React from 'react';
import {Status} from '@Types/Avatar';
import {GenerateAvatar, GenerateAvatarProps} from '../GenerateAvatar';
import {UploadImage, UploadImageProps} from '../uploadImage';
import {Choose, When} from '@Commons/index';

interface RenderAvatarPickersProps {
  image: UploadImageProps;
  avatar: GenerateAvatarProps;
  status: Status;
}

export const RenderAvatarPickers: React.FC<RenderAvatarPickersProps> = ({
  avatar,
  status,
  image,
}) => {
  return (
    <Choose>
      <When condition={status === Status.GenerateAvatar}>
        <GenerateAvatar {...avatar} />
      </When>
      <When condition={status === Status.UploadImage}>
        <UploadImage {...image} />
      </When>
    </Choose>
  );
};
