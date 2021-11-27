import {StyleSheet} from 'react-native';
import {COLORS} from '@Styles/colors';

export default StyleSheet.create({
  container: {
    width: '89%',
    alignSelf: 'center',
    borderRadius: 25,
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    marginTop: 25,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    marginHorizontal: 10,
  },

  pickerContainer: {
    width: '95%',
    marginLeft: 5,
    backgroundColor: COLORS.lightGray,
    height: 50,
    borderRadius: 25,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  pickerText: {
    flex: 1,
    marginLeft: 10,
  },
  modalContainer: {
    marginTop: 30,
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
});
