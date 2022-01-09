import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {Article} from '@GraphQL/requests';
import {useToggleButton} from '@Hooks/useToggle';

import {LikeButton} from '@Components/LikeButton';
import {IconContainer} from '@Components/IconContainer';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppBadge, AppResizedText, AppText} from '@Commons/index';
import {COLORS} from '@Styles/index';
import {UserImage} from '@Components/UserImage';

import styles from './styles';

interface Props {
  item: Article;
  handleNavigate(id: string): void;
  handleWatchListItems(item: Article): void;
  likeOrDisLikeArticle(variables: any): any;
}

export const ArticleCard: React.FC<Props> = ({
  item,
  handleNavigate,
  handleWatchListItems,
  likeOrDisLikeArticle,
}) => {
  const {author, description, category, title, id, likes} = item;

  const {value: isLiked, toggleButton: toggleLikeButton} = useToggleButton();
  const {value: isWatched, toggleButton: toggleWatchButton} = useToggleButton(
    item.isOnWatchList,
  );

  const onWatchList = () => {
    toggleWatchButton();
    handleWatchListItems(item);
  };
  const onLikeOrDisLikeArticle = () => {
    likeOrDisLikeArticle({
      variables: {
        id,
        likes: 100,
      },
    });
    toggleLikeButton();
  };
  // console.log(item, 'hh');
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigate(id)}>
      <View style={styles.main}>
        <View style={styles.flex}>
          <UserImage
            resizeMode="cover"
            style={styles.avatar}
            imageUrl={author.imageUrl}
            image={author.image}
          />
          <Text style={styles.username}> {author.username}</Text>
        </View>
        <IconContainer
          style={styles.iconContainer}
          onPress={onWatchList}
          color={isWatched ? COLORS.orange : COLORS.lightGrey}>
          <Icon name="bookmark" size={22} color={COLORS.white} />
        </IconContainer>
      </View>
      <View>
        <AppText style={styles.desc}>{title}</AppText>
        <AppResizedText
          substring={100}
          text={description}
          style={styles.desc}
          fontFamily="Roboto-Light"
        />
      </View>
      <View style={styles.likeContainer}>
        <AppBadge title={category.label} color={category.color.hex} />
        <LikeButton
          likes={likes}
          isLiked={isLiked}
          toggleButton={onLikeOrDisLikeArticle}
        />
      </View>
    </TouchableOpacity>
  );
};
