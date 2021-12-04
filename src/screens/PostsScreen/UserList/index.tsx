import React from 'react';
import {Author} from '@GraphQL/query';
import {TouchableOpacity, Image, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {IF} from '@Commons/index';
import styles from './styles';

interface Props {
  item: Author;
}
export const UserList: React.FC<Props> = ({item}) => {
  console.log(item.imageUrl);
  return (
    <TouchableOpacity>
      <View style={[styles.postImgContainer, {borderColor: item.color?.hex}]}>
        <IF condition={Boolean(item.imageUrl)}>
          <SvgUri uri={item.imageUrl} style={styles.img} />
        </IF>
        <IF condition={Boolean(!item?.imageUrl)}>
          <Image
            source={{uri: item.image?.url}}
            resizeMode="cover"
            style={styles.img}
          />
        </IF>
      </View>
    </TouchableOpacity>
  );
};
