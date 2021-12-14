import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from '@Styles/index';

export default ScaledSheet.create({
  container: {
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    margin: '15@s',
    borderRadius: 20,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    marginRight: '10@s',
    width: 45,
    height: 45,
  },
  avatar: {
    width: '60@s',
    height: '60@s',
    borderRadius: '30@s',
    margin: '10@s',
  },
  username: {
    fontSize: 21,
    color: COLORS.primary,
  },
  desc: {
    fontSize: 18,
    width: '90%',
    marginLeft: '5%',
    marginBottom: 10,
  },
  likeContainer: {
    flexDirection: 'row',
    marginHorizontal: '20@s',
    justifyContent: 'space-between',
    marginVertical: '10@vs',
  },
});
