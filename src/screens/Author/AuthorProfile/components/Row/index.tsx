import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {UserItems} from '@Types/UserList';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {IconContainer} from '@Components/IconContainer';
import {AppText} from '@Commons/AppText';
import {AuthorDetail} from '@GraphQL/query';
import {COLORS} from '@Styles/colors';
import styles from './styles';

interface RowContainerProps {
  items: UserItems[];
  author: AuthorDetail;
}

export const RowContainer: React.FC<RowContainerProps> = ({author, items}) => {
  return (
    <View style={styles.container}>
      {items.map(item => (
        <Row key={item.id} item={item} author={author} />
      ))}
    </View>
  );
};

interface Props {
  author: AuthorDetail;
  item: UserItems;
}

const Row: React.FC<Props> = ({author, item}) => {
  const {color} = author;
  return (
    <TouchableOpacity style={styles.row}>
      <IconContainer color={color.hex} style={styles.iconContainer}>
        <MaterialIcons name={item.icon} size={22} color={COLORS.white} />
      </IconContainer>
      <AppText style={styles.text}>{item.title}</AppText>
    </TouchableOpacity>
  );
};
