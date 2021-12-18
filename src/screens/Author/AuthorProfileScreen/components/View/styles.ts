import {COLORS} from '@Styles/colors';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  ModalContainer: {
    backgroundColor: COLORS.white,
    height: '80%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    marginTop: 15,
    marginLeft: 24,
    fontSize: 20,
  },
});
