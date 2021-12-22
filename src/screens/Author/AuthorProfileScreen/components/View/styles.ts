import {COLORS} from '@Styles/colors';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    // backgroundColor: COLORS.white,
  },
  ModalContainer: {
    backgroundColor: COLORS.white,
    height: '75%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    marginTop: 15,
    marginLeft: 24,
    fontSize: 20,
  },
});
