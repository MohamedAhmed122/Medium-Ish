import {useMutation} from '@apollo/client';
import {UPDATE_AUTHOR_AVATAR} from '../query';

import {UpdateAvatarParams, Navigation} from '../types';
import {AuthParams} from '@Navigation/auth-stack/interface';
import {errorHandler} from '@Utils/errorHandler';

interface UploadAvatar {
  updateAuthor: {
    imageUrl: string;
  };
}

export const useUpdateAvatar = (navigation: Navigation) => {
  const [updateAvatar, {loading}] = useMutation<
    UploadAvatar,
    UpdateAvatarParams
  >(UPDATE_AUTHOR_AVATAR, {
    errorPolicy: 'ignore',
    onCompleted: () => {
      navigation.navigate(AuthParams.UserBio);
    },
    onError: ({networkError}) => {
      errorHandler(networkError);
    },
  });

  return {updateAvatar, updateAvatarLoading: loading};
};
