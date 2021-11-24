import * as React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AppText} from '@Commons/AppText';
import Icon from 'react-native-vector-icons/Entypo';
import {COLORS} from '@Styles/colors';
import styles from './styles';

interface Props {
  handleGoBack(): void;
  title: string;
  color?: string;
}
export const Header: React.FC<Props> = ({
  handleGoBack,
  title,
  color = COLORS.secondary,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleGoBack}>
        <Icon name={'chevron-small-left'} size={25} color={color} />
      </TouchableOpacity>
      <AppText style={[styles.text, {color}]} fontFamily="Roboto-Light">
        {title}
      </AppText>
      <View />
    </View>
  );
};
