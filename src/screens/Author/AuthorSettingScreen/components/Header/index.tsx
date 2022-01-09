import React from 'react';

import {View} from 'react-native';
import {AuthorDetail} from '@GraphQL/requests';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppText} from '@Commons/AppText';
import {UserImage} from '@Components/UserImage';
import t from '@Lib/i18n';
import styles from './styles';

export interface HeaderProps {
  author: AuthorDetail;
  handleEdit(): void;
  shareProfile(): void;
}

export const Header: React.FC<HeaderProps> = ({
  author,
  shareProfile,
  handleEdit,
}) => {
  const {image, imageUrl, username, email, color} = author;
  return (
    <View style={[styles.container, {backgroundColor: color.hex}]}>
      <AppText fontFamily="Roboto-Medium" style={styles.profileText}>
        {t.profileText}
      </AppText>
      <View style={styles.profileContainer}>
        <View style={styles.iconsContainer}>
          <Icon
            size={25}
            name="sharealt"
            color={color.hex}
            onPress={shareProfile}
          />
          <Icon size={25} name="edit" color={color.hex} onPress={handleEdit} />
        </View>
        <UserImage image={image} imageUrl={imageUrl} style={styles.image} />
        <AppText fontFamily="Roboto-Medium" style={styles.text}>
          {username}
        </AppText>
        <AppText fontFamily="Roboto-Medium" style={styles.text}>
          {email}
        </AppText>
      </View>
    </View>
    // <View></View>
  );
};
