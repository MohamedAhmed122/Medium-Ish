import React from 'react';

import {Article} from '@GraphQL/requests';

import {AppText} from '@Commons/AppText';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

interface ArticleCardProps {
  handleNavigate(): void;
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  handleNavigate,
  article,
}) => {
  const {category, title, description} = article;
  console.log(category);
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: category?.color?.hex}]}
      onPress={handleNavigate}>
      <View style={styles.categoryContainer}>
        <Icon name={category.icon} color={category?.color?.hex} size={37} />
        <AppText>{category.label}</AppText>
      </View>
      <View>
        <AppText
          numberOfLines={1}
          style={styles.title}
          fontFamily="Roboto-Bold">
          {title}
        </AppText>
        <AppText numberOfLines={2} style={styles.desc}>
          {description}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};
