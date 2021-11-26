import React from 'react';
import {Post as PostInterface} from '@GraphQL/query';
import {Text, Image, View} from 'react-native';
import {LikeButton} from '@Components/LikeButton';
import {IconContainer} from '@Components/IconContainer';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppBadge} from '@Commons/index';
import {COLORS} from '@Styles/index';
import styles from './styles';
import {useToggleButton} from '@Hooks/useToggle';

interface PostProps {
  item: PostInterface;
  handleNavigate(id: string): void;
}

export const PostCard: React.FC<PostProps> = ({item, handleNavigate}) => {
  const {value: isLiked, toggleButton: toggleLikeButton} = useToggleButton();
  const {value: isWatched, toggleButton: toggleWatchButton} = useToggleButton();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.flex}>
          <Image source={{uri: img}} resizeMode="cover" style={styles.avatar} />
          <Text style={styles.username}> {item.username}</Text>
        </View>
        <IconContainer
          style={styles.iconContainer}
          onPress={toggleWatchButton}
          color={isWatched ? COLORS.orange : COLORS.lightGrey}>
          <Icon name="bookmark" size={22} color={COLORS.white} />
        </IconContainer>
      </View>
      <View>
        <Text style={styles.desc}>{item.body}</Text>
      </View>
      <View style={styles.likeContainer}>
        <LikeButton
          likes={120}
          isLiked={isLiked}
          toggleButton={toggleLikeButton}
        />
        <AppBadge
          onPress={() => handleNavigate(item.id)}
          title="View"
          color={COLORS.secondary}
        />
      </View>
    </View>
  );
};

const img =
  'https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=';
