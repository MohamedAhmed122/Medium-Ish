import {StyleSheet} from 'react-native';
import {COLORS} from '@Styles/colors';

export default StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
    textAlign: 'center',
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
    marginLeft: 10,
  },
  modalContainer: {
    marginTop: 30,
    flex: 1,
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
  },

  colorInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorView: {
    height: 10,
    width: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    marginLeft: 5,
  },
});
