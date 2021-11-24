import {COLORS} from '@Styles/colors';
import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    width: '90%',
    marginLeft: '5%',
    marginVertical: '10@vs',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  img: {
    width: '80@s',
    height: '80@s',
    borderRadius: '12@s',
    margin: '2@s',
  },
  textContainer: {
    marginTop: '10@s',
    marginLeft: '10@s',
  },
  username: {
    color: COLORS.primary,
    fontSize: 18,
    marginBottom: '5@s',
  },
  date: {
    color: COLORS.secondary,
  },
  desc: {
    lineHeight: 23,
    marginTop: '5@vs',
  },
});
