/* eslint-disable curly */
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {AppText} from '@Commons/AppText';
import {SearchArticle} from '@GraphQL/query';
import styles from './styles';
import {UserImage} from '@Components/UserImage';
import {AppLoading} from '@Commons/AppLoading';

interface Props {
  item: SearchArticle;
  loading: boolean;
}
export const SearchCard: React.FC<Props> = ({item, loading}) => {
  const {title, author} = item;

  if (loading) return <AppLoading />;

  // return <Empty />;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <Image source={{uri: img}} />
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
        </View>
      </View>
      <AppText style={styles.desc} fontFamily="Roboto-Regular">
        {title?.length > 95 ? title?.substring(0, 95 - 3) + '.....' : title}
      </AppText>
    </TouchableOpacity>
  );
};

const img =
  'https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=';
