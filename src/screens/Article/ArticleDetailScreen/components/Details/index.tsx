import React from 'react';
import {Text, Dimensions, View} from 'react-native';

import RenderHtml from 'react-native-render-html';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '@Styles/colors';
import styles from './styles';
import {ArticleDetail as DetailedArticle} from '@GraphQL/requests';
import {UserImage} from '@Components/UserImage';
import {AppBadge} from '@Commons/AppBadge';
import {AppText} from '@Commons/AppText';

const {width} = Dimensions.get('window');

interface Props {
  article: DetailedArticle;
}

export const Details: React.FC<Props> = ({article}) => {
  const {author, description, richDescription, category, title} = article;
  const source = {html: richDescription || ''};

  return (
    <>
      <View style={styles.container}>
        <View style={styles.flex}>
          <UserImage
            resizeMode="cover"
            style={styles.image}
            image={author.image}
            imageUrl={author.imageUrl}
          />
          <Text style={styles.username}>{author.username}</Text>
        </View>
        <FontAwesome name="trash" color={COLORS.danger} size={23} />
      </View>
      <View style={styles.descContainer}>
        <AppText fontFamily="Roboto-Medium" style={styles.title}>
          {title}
        </AppText>
        <AppText style={styles.body}>{description}</AppText>
        <RenderHtml source={source} contentWidth={width - 40} />
        <AppBadge style={styles.badge} title={category.label} />
      </View>
    </>
  );
};
