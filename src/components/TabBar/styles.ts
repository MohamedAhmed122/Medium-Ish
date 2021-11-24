import {COLORS} from '@Styles/colors';
import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    width: '60@s',
    height: '60@s',
    borderRadius: '30@s',
    top: '-5@s',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
