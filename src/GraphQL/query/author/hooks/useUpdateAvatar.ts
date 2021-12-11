import {useMutation} from '@apollo/client';
import {UPDATE_AUTHOR_AVATAR} from '../query';

import {UpdateAvatarParams} from '../types';
import {errorHandler} from '@Utils/errorHandler';

interface UploadAvatar {
  updateAuthor: {
    imageUrl: string;
  };
}

export const useUpdateAvatar = () => {
  console.log('uri');
  const [updateAvatar, {loading, error, data}] = useMutation<
    UploadAvatar,
    UpdateAvatarParams
  >(UPDATE_AUTHOR_AVATAR, {
    errorPolicy: 'ignore',

    onError: ({networkError}) => {
      errorHandler(networkError);
    },
  });
  console.log(loading, error, data);
  return {updateAvatar, updateAvatarLoading: loading};
};
