import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '@Styles/colors';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  loginContainer: {
    marginTop: 15,
  },

  container: {
    height,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: {
    textAlign: 'right',
    fontSize: 18,
    color: COLORS.secondary,
    marginBottom: 120,
    marginRight: 50,
    textTransform: 'uppercase',
  },
});
