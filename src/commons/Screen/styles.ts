import {COLORS} from '@Styles/index';
import {ScaledSheet} from 'react-native-size-matters';
import {StatusBar} from 'react-native';

export default ScaledSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: StatusBar.currentHeight,
  },
  scrollScreen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
