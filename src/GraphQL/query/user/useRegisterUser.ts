import {Register, RegisterInput} from './interface';
import {REGISTER_USER} from './query';
import {useMutation} from '@apollo/client';
import {Navigators} from '@Navigation/index';
import {RootNavigation} from '@Navigation/AppNavigation/interface';

export const useRegisterUser = (navigation: RootNavigation) => {
  const [registerUser, {data, loading, error}] = useMutation<
    Register,
    RegisterInput
  >(REGISTER_USER, {
    errorPolicy: 'ignore',
    onError: () => {
      console.log('Error');
    },
    onCompleted: () => {
      console.log('YES');
      navigation.navigate(Navigators.App.TabNavigation, {
        screen: Navigators.Tab.Post,
      });
    },
  });

  return {registerUser, user: data, loading, error};
};
