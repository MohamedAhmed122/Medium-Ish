import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from '@Styles/colors';

export default ScaledSheet.create({
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 2,
    paddingBottom: 10,
    marginTop: 20,
  },
  commentWidth: {
    width: '90%',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
  },
  comment: {
    marginTop: 10,
    fontSize: 20,
  },
  date: {
    color: COLORS.primary,
    textAlign: 'right',
    marginRight: -40,
  },
});
