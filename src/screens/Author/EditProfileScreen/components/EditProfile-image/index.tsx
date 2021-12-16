import React from 'react';

import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Author} from '@GraphQL/requests';

import {UserImage} from '@Components/UserImage';

import styles from './styles';
import {COLORS} from '@Styles/colors';

interface EditProfileImageProps {
  author: Author;
  handleNavigation(): void;
}

export const EditProfileImage: React.FC<EditProfileImageProps> = ({
  author,
  handleNavigation,
}) => {
  const {imageUrl, image} = author;
  return (
    <View>
      <UserImage image={image} imageUrl={imageUrl} style={styles.image} />
      <TouchableOpacity style={styles.iconContainer} onPress={handleNavigation}>
        <Icon name="edit" color={COLORS.secondary} size={20} />
      </TouchableOpacity>
    </View>
  );
};
