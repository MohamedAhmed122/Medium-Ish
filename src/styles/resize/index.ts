import {ModalType} from '@Types/Modal';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
export const resizeModal = (type: ModalType): number => {
  if (type === ModalType.RequestAuth) {
    return height / 3;
  } else if (type === ModalType.LoginForm) {
    return height / 2.2;
  } else if (type === ModalType.RegisterForm) {
    return height / 1.5;
  } else {
    return height / 1.9;
  }
};
