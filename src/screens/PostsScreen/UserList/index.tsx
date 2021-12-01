import {Author} from '@GraphQL/query';
import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import styles from './styles';

interface Props {
  item: Author;
}
export const UserList: React.FC<Props> = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={[styles.postImgContainer, {borderColor: item.color.hex}]}>
        <Image
          source={{uri: item.image.url}}
          resizeMode="cover"
          style={styles.img}
        />
      </View>
    </TouchableOpacity>
  );
};
