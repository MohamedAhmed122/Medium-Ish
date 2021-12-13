import {COLORS} from '@Styles/colors';
import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const {width} = Dimensions.get('window');

const MARGIN = 20;
export default ScaledSheet.create({
  container: {
    backgroundColor: COLORS.orange,
    marginVertical: MARGIN / 2,
    marginHorizontal: MARGIN,
    borderRadius: 10,
    flexDirection: 'row',
  },
  categoryContainer: {
    width: (width - MARGIN * 2.5) / 4,
    height: (width - MARGIN * 2.5) / 4,
    margin: 5,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginVertical: '10@vs',
    color: COLORS.white,
    fontSize: 17,
    width: ((width - MARGIN * 3) * 3) / 4,
  },
  desc: {
    width: ((width - MARGIN * 3) * 3) / 4,
    color: COLORS.white,
  },
});
