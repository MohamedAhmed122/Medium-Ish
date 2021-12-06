import React, {useState} from 'react';
import {View} from 'react-native';
// import CommentList from '../../components/CommentList';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppInput} from '@Commons/index';
import {COLORS} from '@Styles/colors';
import styles from './styles';

export const Comment = () => {
  const [value, setValue] = useState<string>('');
  return (
    <View style={styles.CommentContainer}>
      <View style={styles.commentInput}>
        <View style={styles.comment}>
          <AppInput
            placeholder="write Comment..."
            value={value}
            onChangeText={setValue}>
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
        />
      </View>
    </View>
  );
};
