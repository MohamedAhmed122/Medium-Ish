import {useMutation} from '@apollo/client';
import {UPDATE_AUTHOR_AVATAR} from '../query';

import {UpdateAvatarParams} from '../types';
import {errorHandler} from '@Utils/errorHandler';

interface UploadAvatar {
  updateAuthor: {
    imageUrl: string;
  };
}

export const useUpdateAvatar = (onComplete: () => void) => {
  console.log('uri');
  const [updateAvatar, {loading}] = useMutation<
    UploadAvatar,
    UpdateAvatarParams
  >(UPDATE_AUTHOR_AVATAR, {
    errorPolicy: 'ignore',
    onCompleted: () => {
      onComplete();
    },
    onError: err => {
      errorHandler(err);
    },
  });

  return {updateAvatar, updateAvatarLoading: loading};
};
