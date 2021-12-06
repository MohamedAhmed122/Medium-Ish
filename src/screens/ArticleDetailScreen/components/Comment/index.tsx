import React from 'react';
import {View} from 'react-native';
// import CommentList from '../../components/CommentList';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppInput} from '@Commons/index';
import {COLORS} from '@Styles/colors';
import styles from './styles';

interface Props {
  comment: string;
  setComment(comment: string): void;
  handleCreateComment(): void;
}

export const Comment: React.FC<Props> = ({
  comment,
  setComment,
  handleCreateComment,
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
        <Ionicons
          name="send"
          color={COLORS.secondary}
          size={25}
          style={styles.send}
          onPress={handleCreateComment}
        />
      </View>
    </View>
  );
};
