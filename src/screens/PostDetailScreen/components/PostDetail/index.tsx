import React from 'react';
import {Text, Image, View} from 'react-native';
// import CommentList from '../../components/CommentList';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '@Styles/colors';
import styles from './styles';
import {Post} from '@GraphQL/query';

interface Props {
  post: Post;
}

export const PostDetail: React.FC<Props> = ({post}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.flex}>
          <Image source={{uri: img}} resizeMode="cover" style={styles.image} />
          <Text style={styles.username}>{post.username}</Text>
        </View>
        <FontAwesome name="trash" color={COLORS.danger} size={23} />
      </View>
      <Text style={styles.body}>{post.body}</Text>
    </>
  );
};

const img =
  'https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=';
