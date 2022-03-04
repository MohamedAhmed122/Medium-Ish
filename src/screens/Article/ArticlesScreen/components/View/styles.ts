import {Platform, StyleSheet} from 'react-native';
import {COLORS} from '@Styles/colors';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
});
