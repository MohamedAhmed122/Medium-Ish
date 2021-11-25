import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppText} from '@Commons/AppText';
import {IconContainer} from '@Components/IconContainer';
import {COLORS} from '@Styles/colors';
import styles from './styles';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{title}</AppText>
      <IconContainer>
        <Icon name="navicon" color={COLORS.gray} size={28} />
      </IconContainer>
    </View>
  );
};
