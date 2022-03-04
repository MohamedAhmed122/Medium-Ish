import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '@Styles/colors';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  loginContainer: {
    marginTop: 15,
    height,
    justifyContent: 'space-between',
  },

  title: {
    textAlign: 'right',
    fontSize: 18,
    color: COLORS.secondary,
    marginBottom: 140,
    marginRight: 50,
    textTransform: 'uppercase',
  },
});
