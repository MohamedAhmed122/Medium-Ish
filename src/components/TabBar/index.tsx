import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import {scale} from 'react-native-size-matters';
import {COLORS} from '@Styles/colors';
import {
  TabParams,
  TabRootNavigation,
} from '@Navigation/tab-navigation/interface';

export const TabBarIcon: React.FC = () => {
  const navigation = useNavigation<TabRootNavigation>();

  const handlePress = () => navigation.navigate(TabParams.CreatePost);

  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
      <Entypo name="circle-with-plus" color={COLORS.white} size={scale(38)} />
    </TouchableOpacity>
  );
};
