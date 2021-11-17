import {Register, RegisterInput} from './interface';
import {REGISTER_USER} from './query';
import {useMutation} from '@apollo/client';

// TODO: Learn onError
export const useRegisterUser = () => {
  const [registerUser, {data, loading, error}] = useMutation<
    Register,
    RegisterInput
  >(REGISTER_USER, {});

  return {registerUser, user: data, loading, error};
};
