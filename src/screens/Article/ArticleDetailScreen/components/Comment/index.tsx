import React from 'react';

import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {SendCommentProps, SendComment} from './SendComment';
import {AppInput} from '@Commons/AppInput';

import t from '@Lib/i18n';
import {COLORS} from '@Styles/colors';
import styles from './styles';

interface Props {
  comment: string;
  setComment(comment: string): void;
  sendComment: SendCommentProps;
}

export const Comment: React.FC<Props> = ({
  comment,
  setComment,
  sendComment,
}) => {
  return (
    <View style={styles.CommentContainer}>
      <View style={styles.commentInput}>
        <View style={styles.comment}>
          <AppInput
            placeholder={t.inputs.comment}
            value={comment}
            onChangeText={setComment}>
            <FontAwesome
              name="angellist"
              color={COLORS.gray}
              size={21}
              style={styles.angellist}
            />
          </AppInput>
        </View>
        <SendComment {...sendComment} />
      </View>
    </View>
  );
};
