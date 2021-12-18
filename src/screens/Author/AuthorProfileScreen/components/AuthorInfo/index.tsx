import React from 'react';
import {AppBadge} from '@Commons/AppBadge';
import {AppText} from '@Commons/AppText';
import {UserImage} from '@Components/UserImage';
import {AuthorDetail} from '@GraphQL/requests';
import {View} from 'react-native';
import styles from './styles';
interface AuthorInfoProps {
  author: AuthorDetail;
}

export const AuthorInfo: React.FC<AuthorInfoProps> = ({author}) => {
  const {image, imageUrl, email, bio, color} = author;
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <UserImage style={styles.image} image={image} imageUrl={imageUrl} />
        <View style={styles.emailContainer}>
          <AppText style={styles.emailStyle}> {email}</AppText>
        </View>
      </View>
      <AppText style={styles.desc}>
        {bio} The following builds are available to test. Learn more about build
        status and metrics. Version 9.1
      </AppText>
      <AppBadge title="My color" color={color.hex} />
    </View>
  );
};