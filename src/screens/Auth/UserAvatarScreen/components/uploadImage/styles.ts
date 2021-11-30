import {COLORS} from '@Styles/colors';
import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.9,
  },
  placeholder: {
    width: '250@s',
    height: '250@s',
    borderRadius: '10@s',
    backgroundColor: COLORS.lightGrey,
    marginTop: '10@vs',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: '10@vs',
  },
});
