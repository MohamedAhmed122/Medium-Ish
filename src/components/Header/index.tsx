import {COLORS} from '@Styles/colors';
import * as React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

interface Props {
  handleGoBack(): void;
  title: string;
}
export const Header: React.FC<Props> = ({handleGoBack, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleGoBack}>
        <Icon name={'chevron-small-left'} size={25} color={COLORS.secondary} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      <View />
    </View>
  );
};
