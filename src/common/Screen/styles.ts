import {COLORS} from './../../styles';
import {ScaledSheet} from 'react-native-size-matters';
import {Platform} from 'react-native';

export default ScaledSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  scrollScreen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
