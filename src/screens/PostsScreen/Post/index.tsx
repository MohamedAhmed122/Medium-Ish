import React, {useState} from 'react';
import {Post as PostInterface} from '@GraphQL/query';
import {Text, Image, View} from 'react-native';
import {AppBadge} from '@Commons/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '@Styles/index';
import styles from './styles';

interface PostProps {
  item: PostInterface;
}

export const Post: React.FC<PostProps> = ({item}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const toggleButton = (): void => setIsLiked(!isLiked);

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Image source={{uri: img}} resizeMode="cover" style={styles.avatar} />
        <Text style={styles.username}> {item.username}</Text>
      </View>
      <View>
        <Text style={styles.desc}>{item.body}</Text>
      </View>
      <View style={styles.likeContainer}>
        <View style={styles.flex}>
          <AntDesign
            name={isLiked ? 'like1' : 'like2'}
            color={isLiked ? COLORS.secondary : COLORS.danger}
            size={20}
            onPress={toggleButton}
          />
          <Text style={styles.like}> 120 Likes</Text>
        </View>
        <AppBadge onPress={() => {}} title="View" color={COLORS.primary} />
      </View>
    </View>
  );
};

const img =
  'https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=';
