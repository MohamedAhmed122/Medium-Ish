import React from 'react';
import {View, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import {RequestAuth} from './RequestAuth';
import styles from './styles';

const {height} = Dimensions.get('window');

interface Props {
  handleCloseModal(): void;
  isVisible: boolean;
}

export const AppModal: React.FC<Props> = ({handleCloseModal, isVisible}) => {
  console.log(isVisible);
  //   const [steps, setSteps] = useState<number>(0);

  return (
    <Modal
      onBackdropPress={handleCloseModal}
      isVisible={isVisible}
      style={[styles.modal, {bottom: -height / 1.6}]}>
      <View style={styles.modalContainer}>
        <RequestAuth />
      </View>
    </Modal>
  );
};
