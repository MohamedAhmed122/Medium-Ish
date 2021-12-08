import React from 'react';

import {View} from 'react-native';
import {AuthorDetail} from '@GraphQL/query';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppText} from '@Commons/AppText';
import {UserImage} from '@Components/UserImage';
import styles from './styles';

interface Props {
  author: AuthorDetail;
}

export const Header: React.FC<Props> = ({author}) => {
  const {image, imageUrl, username, email, color} = author;
  return (
    <View style={[styles.container, {backgroundColor: color.hex}]}>
      <AppText fontFamily="Roboto-Medium" style={styles.profileText}>
        PROFILE
      </AppText>
      <View style={styles.profileContainer}>
        <View style={styles.iconsContainer}>
          <Icon size={25} name="sharealt" color={color.hex} />
          <Icon size={25} name="edit" color={color.hex} />
        </View>
        <UserImage image={image} imageUrl={imageUrl} style={styles.image} />
        <AppText fontFamily="Roboto-Light" style={styles.text}>
          {username}
        </AppText>
        <AppText fontFamily="Roboto-Light" style={styles.text}>
          {email}
        </AppText>
      </View>
    </View>
  );
};
