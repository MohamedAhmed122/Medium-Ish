import {useMutation} from '@apollo/client';
import {UPDATE_AUTHOR_AVATAR} from '../query';

import {UpdateAvatarParams, Navigation} from '../types';
import {AuthParams} from '@Navigation/AuthNavigator/interface';

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
    onError: er => {
      console.log(er);
    },
  });

  return {updateAvatar, updateAvatarLoading: loading};
};
