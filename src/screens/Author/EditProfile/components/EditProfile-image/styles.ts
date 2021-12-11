import {COLORS} from '@Styles/colors';
import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    left: width / 2 + 20,
    top: 20,
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.gray,
    borderRadius: 30,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
    alignSelf: 'center',
    resizeMode: 'cover',
    marginVertical: 30,
  },
});
