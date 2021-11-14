import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
import {COLORS} from '@Styles/colors';
const {width, height} = Dimensions.get('window');

export default ScaledSheet.create({
  modal: {
    width: '90%',
    marginLeft: '5%',
    marginTop: '10%',
  },
  modalContainer: {
    width,
    height,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.darkGray,
    lineHeight: 30,
  },
});
