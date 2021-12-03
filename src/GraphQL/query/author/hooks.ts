// TYPES
import {AuthParamList, AuthParams} from '@Navigation/AuthNavigator/interface';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  Author,
  InitiateAuthor,
  InitiateAuthorParams,
  UpdateAvatarParams,
} from './interface';
import {Nullable} from '@Types/Common';
// QL
import {useMutation, useQuery} from '@apollo/client';
import {GET_AUTHORS, INITIATE_AUTHOR, UPDATE_AUTHOR_AVATAR} from './query';
import {currentAuthor} from '@GraphQL/Apollo/cache';
import {string} from 'yup/lib/locale';

type Navigation = StackNavigationProp<AuthParamList, AuthParams.Register>;

interface Authors {
  authors: Author[];
}

interface UseGetAuthors {
  loading: boolean;
  authors: Nullable<Authors>;
}

export const useGetAuthors = (): UseGetAuthors => {
  const {loading, data} = useQuery<Authors>(GET_AUTHORS);

  return {loading, authors: data};
};

export const useInitiateAuthor = (navigation: Navigation) => {
  const [registerUser, {loading, data, error}] = useMutation<
    {createAuthor: InitiateAuthor},
    InitiateAuthorParams
  >(INITIATE_AUTHOR, {
    errorPolicy: 'ignore',
    onError: er => {
      console.log(er);
    },
    onCompleted: author => {
      console.log('YES');
      currentAuthor({
        id: author?.createAuthor.id,
        name: author?.createAuthor.name,
        username: author?.createAuthor.username,
      });
      navigation.navigate(AuthParams.UserAvatar);
    },
  });
  return {registerUser, loading, data, error};
};

interface UploadAvatar {
  updateAuthor: {
    imageUrl: string;
  };
}

export const useUpdateAvatar = (navigation: Navigation) => {
  const [updateAvatar, {loading, data}] = useMutation<
    UploadAvatar,
    UpdateAvatarParams
  >(UPDATE_AUTHOR_AVATAR, {
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

  return {updateAvatar, updateAvatarLoading: loading, data};
};

// export const useUploadImage = (navigation : Navigation) =>{

// }
