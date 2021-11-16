import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default ScaledSheet.create({
  modal: {
    left: -20,
    bottom: -20,
    position: 'absolute',
  },
  modalContainer: {
    width,
    height: height / 1.5,
    backgroundColor: 'white',
    borderRadius: 18,
  },
});
