import React from 'react';
import {Text, Dimensions, View} from 'react-native';
// import CommentList from '../../components/CommentList';
import RenderHtml from 'react-native-render-html';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '@Styles/colors';
import styles from './styles';
import {ArticleDetail} from '@GraphQL/query';
import {UserImage} from '@Components/UserImage';
import {AppBadge} from '@Commons/AppBadge';
import {AppText} from '@Commons/AppText';

const {width} = Dimensions.get('window');

interface Props {
  article: ArticleDetail;
}

export const PostDetail: React.FC<Props> = ({article}) => {
  const {author, description, richDescription, category, title} = article;
  console.log(richDescription);

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
        <RenderHtml source={richDescription} contentWidth={width - 40} />
        <AppBadge style={styles.badge} title={category.name} />
      </View>
    </>
  );
};
