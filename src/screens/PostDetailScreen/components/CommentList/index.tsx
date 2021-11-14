import React from 'react';
import {Text, View, Image} from 'react-native';
import {COLORS} from '@Styles/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface Props {
  comment: any;
}

export const CommentList: React.FC<Props> = ({comment}) => {
  console.log(comment, 'comment -->');
  return (
    <View style={styles.commentContainer}>
      <View style={styles.commentWidth}>
        <View style={styles.flex}>
          <Image source={{uri: img}} resizeMode="cover" style={styles.img} />
          <Text style={styles.username}>Username</Text>
        </View>
        <Text style={styles.comment}>what a cool post</Text>
        <Text style={styles.date}>12.02.20202</Text>
      </View>
      <FontAwesome name="trash" color={COLORS.danger} size={25} />
    </View>
  );
};

const img =
  'https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=';
