import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {UserItems} from '@Types/UserList';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {IconContainer} from '@Components/IconContainer';
import {AppText} from '@Commons/AppText';
import {AuthorDetail} from '@GraphQL/query';
import {COLORS} from '@Styles/colors';
import styles from './styles';

export interface RowContainerProps extends Omit<RowProps, 'item'> {
  items: UserItems[];
}

export const RowContainer: React.FC<RowContainerProps> = ({items, ...row}) => {
  return (
    <View style={styles.container}>
      {items.map(item => (
        <Row key={item.id} item={item} {...row} />
      ))}
    </View>
  );
};

export interface RowProps {
  author: AuthorDetail;
  item: UserItems;
  onPress(str: string): void;
}

const Row: React.FC<RowProps> = ({author, item, onPress}) => {
  const {color} = author;
  return (
    <TouchableOpacity style={styles.row} onPress={() => onPress(item.title)}>
      <IconContainer color={color.hex} style={styles.iconContainer}>
        <MaterialIcons name={item.icon} size={22} color={COLORS.white} />
      </IconContainer>
      <AppText style={styles.text}>{item.title}</AppText>
    </TouchableOpacity>
  );
};
