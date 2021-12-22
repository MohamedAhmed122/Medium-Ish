import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Author} from '@GraphQL/requests';
import {UserImage} from '@Components/UserImage';

import styles from './styles';
export interface UserListProps {
  item: Author;
  onPress(id: string): void;
}
export const UserList: React.FC<UserListProps> = ({item, onPress}) => {
  return (
    <>
      <TouchableOpacity onPress={() => onPress(item.id)}>
        <View style={[styles.postImgContainer, {borderColor: item.color?.hex}]}>
          <UserImage
            style={styles.img}
            imageUrl={item.imageUrl}
            image={item.image}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};
