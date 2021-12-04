import {useMutation} from '@apollo/client';
import {currentAuthor} from '@GraphQL/Apollo/cache';
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
    onCompleted: author => {
      console.log('YES');
      navigation.navigate(AuthParams.UserBio);
      currentAuthor({
        ...currentAuthor(),
        imageUrl: author.updateAuthor.imageUrl,
      });
    },
    onError: er => {
      console.log(er);
    },
  });

  return {updateAvatar, updateAvatarLoading: loading};
};
