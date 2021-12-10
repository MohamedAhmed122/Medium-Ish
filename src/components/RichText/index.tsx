import React, {useRef} from 'react';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import {pickImage} from '@Utils/PickImage';
import {Text, View} from 'react-native';

import styles from './styles';
import {COLORS} from '@Styles/colors';

interface Props {
  handleOnHtmlChange(html: string): void;
}

export const RichTextEditor: React.FC<Props> = ({handleOnHtmlChange}) => {
  const richText = useRef<any>();

  const handleChange = (html: string) => handleOnHtmlChange(html);

  const onPressAddImage = async () => {
    const image = await pickImage();

    image &&
      richText.current?.insertImage(`data:${image.mime};base64,${image.data}`);
  };

  return (
    <View style={styles.container}>
      <RichToolbar
        style={[styles.containerStyle, styles.topToolBar]}
        editor={richText}
        selectedIconTint={COLORS.secondary}
        disabledIconTint={COLORS.gray}
        onPressAddImage={onPressAddImage}
      />
      <RichEditor
        editorStyle={styles.editorStyle}
        ref={richText}
        useContainer={true}
        initialHeight={250}
        containerStyle={[styles.containerStyle, styles.containerTextEditor]}
        placeholder={'please input content'}
        onChange={handleChange}
        pasteAsPlainText={true}
      />
      <RichToolbar
        style={[styles.containerStyle, styles.bottomToolBar]}
        editor={richText}
        selectedIconTint={COLORS.secondary}
        disabledIconTint={COLORS.gray}
        onPressAddImage={onPressAddImage}
        actions={[
          actions.undo,
          actions.redo,
          actions.insertImage,
          actions.setStrikethrough,
          actions.checkboxList,
          actions.insertOrderedList,
          actions.blockquote,
          actions.alignLeft,
          actions.alignCenter,
          actions.alignRight,
          actions.code,
          actions.line,
          actions.heading1,
          actions.heading4,
          'fontSize',
        ]}
        iconMap={{
          [actions.heading1]: ({tintColor}) => (
            <Text style={[styles.tib, {color: tintColor}]}>H1</Text>
          ),
          [actions.heading4]: ({tintColor}) => (
            <Text style={[styles.tib, {color: tintColor}]}>H3</Text>
          ),
        }}
      />
    </View>
  );
};
