import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from '@Styles/colors';

export default ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  username: {
    fontSize: 20,
    color: COLORS.secondary,
  },
  body: {
    width: '90%',
    marginLeft: '5%',
    margin: 10,
    fontSize: 21,
    // textAlign: 'start',
    lineHeight: 30,
  },
});
