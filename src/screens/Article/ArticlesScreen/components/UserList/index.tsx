import React from 'react';
import {Author} from '@GraphQL/requests';
import {TouchableOpacity, View} from 'react-native';

import styles from './styles';
import {UserImage} from '@Components/UserImage';

interface Props {
  item: Author;
  handleNavigateToProfile(id: string, username: string): void;
}
export const UserList: React.FC<Props> = ({item, handleNavigateToProfile}) => {
  return (
    <TouchableOpacity
      onPress={() => handleNavigateToProfile(item.id, item.username)}>
      <View style={[styles.postImgContainer, {borderColor: item.color?.hex}]}>
        <UserImage
          style={styles.img}
          imageUrl={item.imageUrl}
          image={item.image}
        />
      </View>
    </TouchableOpacity>
  );
};
