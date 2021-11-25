import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import styles from './styles';

interface Props {
  index: number;
}
export const UserList: React.FC<Props> = ({index}) => {
  return (
    <TouchableOpacity>
      <View
        style={[
          index % 2 ? styles.activePost : styles.inactivePost,
          styles.postImgContainer,
        ]}>
        <Image source={{uri: img}} resizeMode="cover" style={styles.img} />
      </View>
    </TouchableOpacity>
  );
};

const img =
  'https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=';
