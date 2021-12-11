import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from '@Styles/colors';

export default ScaledSheet.create({
  CommentContainer: {
    borderTopColor: COLORS.gray,
    borderTopWidth: 2,
  },
  comment: {
    width: '90%',
  },
  title: {
    fontWeight: 'bold',
    color: COLORS.secondary,
    fontSize: 20,
    marginLeft: 20,
  },
  angellist: {
    marginRight: 10,
  },
  send: {
    marginTop: 20,
  },
  commentInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});
