import {StyleSheet} from 'react-native';
import {COLORS} from '@Styles/index';

export default StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: COLORS.danger,
    textAlign: 'center',
  },
  errorImage: {
    width: 240,
    height: 250,
    alignSelf: 'center',
  },
  mainText: {
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
