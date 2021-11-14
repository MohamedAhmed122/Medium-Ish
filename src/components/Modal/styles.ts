import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default ScaledSheet.create({
  modal: {
    width,
    left: -20,
    height,
  },
  modalContainer: {
    width,
    height,
    backgroundColor: 'white',
    borderRadius: 18,
  },
});
