import {COLORS} from '@Styles/colors';
import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    marginTop: '120@vs',
    width: '90%',
    marginLeft: '5%',
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 10,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15@vs',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});
