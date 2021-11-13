import {COLORS} from './../../styles';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    width: '95%',
    marginLeft: '2.5%',
    backgroundColor: COLORS.gray,
    height: 50,
    borderRadius: '25@s',
    padding: '10@s',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20@vs',
  },

  inputText: {
    backgroundColor: 'transparent',
    width: 'auto',
    height: '100%',
    marginLeft: 20,
    color: COLORS.dark,
    fontSize: 18,
    flex: 1,
  },
});

export default styles;
