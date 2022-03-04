import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  imgContainer: {
    alignItems: 'center',
    // justifyContent: 'center',
    // flex: 1,
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20@vs',
  },
  btnContainer: {
    marginTop: '30@vs',
    width: '80%',
    alignSelf: 'center',
  },
});
