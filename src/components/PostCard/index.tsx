import React from 'react';
import {Article, Post, Post as PostInterface} from '@GraphQL/query';
import {Text, Image, View} from 'react-native';
import {LikeButton} from '@Components/LikeButton';
import {IconContainer} from '@Components/IconContainer';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppBadge} from '@Commons/index';
import {COLORS} from '@Styles/index';
import styles from './styles';
import {useToggleButton} from '@Hooks/useToggle';

interface PostProps {
  item: Article;
  handleNavigate(id: string): void;
  handleWatchListItems(item: Post): void;
}

export const PostCard: React.FC<PostProps> = ({
  item,
  handleNavigate,
  handleWatchListItems,
}) => {
  const {value: isLiked, toggleButton: toggleLikeButton} = useToggleButton();
  const {value: isWatched, toggleButton: toggleWatchButton} = useToggleButton();

  const onWatchList = () => {
    // toggleWatchButton();
    // handleWatchListItems(item);
  };
  console.log(item, 'item');
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.flex}>
          <Image
            source={{uri: item.author.image.url}}
            resizeMode="cover"
            style={styles.avatar}
          />
          <Text style={styles.username}> {item.author.username}</Text>
        </View>
        <IconContainer
          style={styles.iconContainer}
          onPress={onWatchList}
          color={isWatched ? COLORS.orange : COLORS.lightGrey}>
          <Icon name="bookmark" size={22} color={COLORS.white} />
        </IconContainer>
      </View>
      <View>
        <Text style={styles.desc}>{item.description}</Text>
      </View>
      <View style={styles.likeContainer}>
        <LikeButton
          likes={item.likes}
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
