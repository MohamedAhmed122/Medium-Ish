import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {AppText} from '@Commons/AppText';
import styles from './styles';

interface Props {}
export const SearchCard: React.FC<Props> = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <Image source={{uri: img}} resizeMode="cover" style={styles.img} />
        <View style={styles.textContainer}>
          <AppText style={styles.username} fontFamily="Roboto-Regular">
            Mohamed Youssef
          </AppText>
          <AppText style={styles.date} fontFamily="Roboto-Bold">
            12.10.2021
          </AppText>
        </View>
      </View>
      <AppText style={styles.desc} fontFamily="Roboto-Regular">
        {title?.length > 95 ? title?.substring(0, 95 - 3) + '.....' : title}
      </AppText>
    </TouchableOpacity>
  );
};
const title =
  'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of';
const img =
  'https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=';
