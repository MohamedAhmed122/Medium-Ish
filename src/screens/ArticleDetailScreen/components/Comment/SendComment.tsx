import React from 'react';
import {ActivityIndicator} from 'react-native';
import {COLORS} from '@Styles/colors';
import {IF} from '@Commons/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export interface SendCommentProps {
  loading: boolean;
  handleCreateComment(): void;
}

export const SendComment: React.FC<SendCommentProps> = ({
  loading,
  handleCreateComment,
}) => {
  return (
    <>
      <IF condition={loading}>
        <ActivityIndicator />
      </IF>
      <IF condition={!loading}>
        <Ionicons
          name="send"
          color={COLORS.secondary}
          size={25}
          style={styles.send}
          onPress={handleCreateComment}
        />
      </IF>
    </>
  );
};
