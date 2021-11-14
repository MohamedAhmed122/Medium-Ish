import React from 'react';
import {Text, View} from 'react-native';
// import CommentList from '../../components/CommentList';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppInput} from '@Commons/index';
import {COLORS} from '@Styles/colors';
import styles from './styles';

export const Comment = () => {
  return (
    <View style={styles.CommentContainer}>
      <Text style={styles.title}>Write Comment</Text>
      <View style={styles.commentInput}>
        <View style={styles.comment}>
          <AppInput
            placeholder="write Comment..."
            value=""
            onChangeText={() => {}}>
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
