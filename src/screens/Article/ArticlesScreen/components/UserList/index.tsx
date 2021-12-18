import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Author} from '@GraphQL/requests';
import {UserImage} from '@Components/UserImage';
import {AuthorProfileScreen} from '@Screens/Author';

import styles from './styles';
export interface UserListProps {
  item: Author;
  onPress(): void;
  openAuthorModal: boolean;
}
export const UserList: React.FC<UserListProps> = ({
  item,
  onPress,
  openAuthorModal,
}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.postImgContainer, {borderColor: item.color?.hex}]}>
          <UserImage
            style={styles.img}
            imageUrl={item.imageUrl}
            image={item.image}
          />
        </View>
      </TouchableOpacity>
      <AuthorProfileScreen
        ontoggleAuthorModal={onPress}
        openAuthorModal={openAuthorModal}
        id={item.id}
      />
    </>
  );
};
