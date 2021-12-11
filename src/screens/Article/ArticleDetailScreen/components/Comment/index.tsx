import React from 'react';
import {View} from 'react-native';

import {SendCommentProps, SendComment} from './SendComment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AppInput} from '@Commons/index';
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
            placeholder="write Comment..."
            value={comment}
            onChangeText={setComment}>
            <FontAwesome
              name="angellist"
              color="gray"
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
