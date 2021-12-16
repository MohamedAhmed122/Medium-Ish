import {ParamId} from '@Types/Common';
import {errorHandler} from '@Utils/errorHandler';
import {useMutation} from '@apollo/client';
import {UpdateAuthorInfoParams, UPDATE_AUTHOR_DATA} from '@GraphQL/requests';

interface AuthorDataParams extends UpdateAuthorInfoParams {
  name: string;
  email: string;
}

export const useEditAuthorData = () => {
  const [editProfile, {data, loading, error}] = useMutation<
    ParamId,
    AuthorDataParams
  >(UPDATE_AUTHOR_DATA, {
    errorPolicy: 'ignore',
    onError: ({networkError}) => {
      errorHandler(networkError);
    },
    onCompleted: () => {
      console.log('YES');
    },
  });
  console.log(data, loading, error);
  return {editProfile, loading};
};
