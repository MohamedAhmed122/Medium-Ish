import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  img: {
    width: '250@s',
    height: '300@s',
    alignSelf: 'center',
    top: '100@vs',
  },
  container: {
    top: '150@vs',
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
  },
});
