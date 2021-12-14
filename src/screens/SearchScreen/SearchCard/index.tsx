import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SearchArticle} from '@GraphQL/query';
import {UserImage} from '@Components/UserImage';
import {AppResizedText, AppText} from '@Commons/index';

import styles from './styles';

interface Props {
  item: SearchArticle;
}
export const SearchCard: React.FC<Props> = ({item}) => {
  const {title, author, description} = item;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <UserImage
          resizeMode="cover"
          style={styles.img}
          image={author.image}
          imageUrl={author.imageUrl}
        />
        <View style={styles.textContainer}>
          <AppText style={styles.username} fontFamily="Roboto-Regular">
            {author.username}
          </AppText>
          <AppText style={styles.date} fontFamily="Roboto-Bold">
            12.10.2021
          </AppText>
          <AppResizedText
            style={styles.title}
            fontFamily="Roboto-Regular"
            text={title}
            substring={35}
          />
        </View>
      </View>
      <AppResizedText
        text={description}
        fontFamily="Roboto-Medium"
        substring={95}
        style={styles.desc}
      />
    </TouchableOpacity>
  );
};
