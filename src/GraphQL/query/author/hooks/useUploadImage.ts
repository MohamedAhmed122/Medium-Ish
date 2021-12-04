import {useMutation} from '@apollo/client';
// import {currentAuthor} from '@GraphQL/Apollo/cache';
import {UPDATE_AUTHOR_IMAGE} from '../query';

import {AuthorUploadImage, Navigation, UpdateImageParams} from '../types';
import {AuthParams} from '@Navigation/AuthNavigator/interface';

export const useUploadImage = (navigation: Navigation) => {
  const [uploadImage, {loading, data}] = useMutation<
    {updateAuthor: AuthorUploadImage},
    UpdateImageParams
  >(UPDATE_AUTHOR_IMAGE, {
    errorPolicy: 'ignore',
    onCompleted: () => {
      console.log('Yes');
      navigation.navigate(AuthParams.UserBio);
    },
    onError: err => {
      console.log(err);
    },
  });

  return {uploadImageLoading: loading, data, uploadImage};
};
