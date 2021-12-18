import {COLORS} from '@Styles/colors';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: '5%',
  },
  topContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginTop: 24,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  emailContainer: {
    justifyContent: 'flex-end',
  },
  emailStyle: {
    color: COLORS.primary,
    marginLeft: 10,
    fontSize: 17,
  },
  desc: {
    marginVertical: 10,
  },
});
