import {useMutation} from '@apollo/client';
import {UPDATE_AUTHOR_IMAGE} from '../query';

import {AuthorUploadImage, Navigation, UpdateImageParams} from '../types';
import {AuthParams} from '@Navigation/auth-stack/interface';
import {errorHandler} from '@Utils/errorHandler';

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
    onError: ({networkError}) => {
      errorHandler(networkError);
    },
  });

  return {uploadImageLoading: loading, data, uploadImage};
};
