import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from '@Styles/index';

export default ScaledSheet.create({
  activePost: {
    borderColor: COLORS.primary,
  },
  inactivePost: {
    borderColor: COLORS.white,
  },
  postImgContainer: {
    borderWidth: 4,
    margin: '1@s',
    borderRadius: 50,
    padding: 7,
  },
  img: {
    width: '60@s',
    height: '60@s',
    borderRadius: '30@s',
  },
  // activePost: {
  //   width: '12@s',
  //   height: '12@s',
  //   borderRadius: '6@s',
  //   backgroundColor: COLORS.lightGreen,
  //   position: 'absolute',
  //   left: '58@s',
  //   bottom: '60@s',
  //   zIndex: 100,
  // },
});
