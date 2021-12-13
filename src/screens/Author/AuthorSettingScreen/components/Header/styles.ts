import {COLORS} from '../../../../../styles/colors/index';
import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    height: '200@vs',
  },
  profileText: {
    textAlign: 'center',
    paddingTop: '60@vs',
    fontSize: 18,
  },
  profileContainer: {
    position: 'absolute',
    height: '190@vs',
    width: '80%',
    marginLeft: '10%',
    backgroundColor: COLORS.white,
    top: '100@vs',
    borderRadius: 15,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '10@s',
  },
  image: {
    width: '100@s',
    height: '100@s',
    alignSelf: 'center',
    borderRadius: '50@s',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    lineHeight: 20,
  },
});
