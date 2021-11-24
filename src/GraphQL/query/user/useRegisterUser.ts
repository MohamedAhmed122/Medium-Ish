import {ModalType} from '@Types/Modal';
import {Register, RegisterInput} from './interface';
import {REGISTER_USER} from './query';
import {useMutation} from '@apollo/client';

export const useRegisterUser = (setModalType: (type: ModalType) => void) => {
  const [registerUser, {data, loading, error}] = useMutation<
    Register,
    RegisterInput
  >(REGISTER_USER, {
    errorPolicy: 'ignore',
    onCompleted: () => {
      setModalType(ModalType.RequestAuth);
    },
  });

  return {registerUser, user: data, loading, error};
};
