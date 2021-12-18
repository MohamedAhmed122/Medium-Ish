import {useMutation} from '@apollo/client';
import {UPDATE_AUTHOR_IMAGE} from '../query';

import {AuthorUploadImage, UpdateImageParams} from '../types';

import {errorHandler} from '@Utils/errorHandler';

export const useUploadImage = () => {
  const [uploadImage, {loading, data}] = useMutation<
    {updateAuthor: AuthorUploadImage},
    UpdateImageParams
  >(UPDATE_AUTHOR_IMAGE, {
    errorPolicy: 'ignore',

    onError: err => {
      errorHandler(err);
    },
  });

  return {uploadImageLoading: loading, data, uploadImage};
};
