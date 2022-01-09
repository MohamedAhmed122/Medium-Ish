import {COLORS} from '@Styles/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGrey,
    paddingVertical: 17,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginLeft: 5,
  },

  avatar: {
    backgroundColor: COLORS.lightGrey,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.darkGray,
    textTransform: 'uppercase',
    fontSize: 15,
  },
  svg: {
    marginBottom: 7,
  },
});
