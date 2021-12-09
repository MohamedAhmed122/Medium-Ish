import {COLORS} from '@Styles/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 30,
  },
  tib: {
    textAlign: 'center',
    color: COLORS.gray,
  },
  editorStyle: {
    backgroundColor: COLORS.gray,
  },
  containerTextEditor: {
    height: '10%',
  },
  containerStyle: {
    width: '94%',
    marginLeft: '3%',
  },
  topToolBar: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bottomToolBar: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});
