import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '@Styles/colors';
import {View, StyleSheet} from 'react-native';
import {AppText} from '@Commons/AppText';

interface Props {
  isLiked: boolean;
  toggleButton(): void;
  likes: number;
}

export const LikeButton: React.FC<Props> = ({isLiked, toggleButton, likes}) => {
  return (
    <View style={styles.flex}>
      <AntDesign
        name={isLiked ? 'like1' : 'like2'}
        color={COLORS.primary}
        size={20}
        onPress={toggleButton}
      />
      <AppText style={styles.like}> {likes} Likes</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  like: {
    color: COLORS.primary,
  },
});
