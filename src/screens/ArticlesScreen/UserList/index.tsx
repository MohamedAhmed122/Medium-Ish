import React from 'react';
import {Author} from '@GraphQL/query';
import {TouchableOpacity, View} from 'react-native';

import styles from './styles';
import {UserImage} from '@Components/UserImage';

interface Props {
  item: Author;
}
export const UserList: React.FC<Props> = ({item}) => {
  return (
    <TouchableOpacity>
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
