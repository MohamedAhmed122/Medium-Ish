import React from 'react';
import {View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {Seed} from '@Types/Avatar';
import {AnimatableView, AppBadge, AppButton} from '@Commons/index';
import {avatars} from '@Assets/data';
import {COLORS} from '@Styles/colors';
import styles from './styles';

export interface GenerateAvatarProps {
  changeSeed(type: Seed): void;
  randomize(): void;
  handleProcessed(): void;
  uri: string;
  updateAvatarLoading: boolean;
}
export const GenerateAvatar: React.FC<GenerateAvatarProps> = ({
  uri,
  changeSeed,
  randomize,
  handleProcessed,
  updateAvatarLoading,
}) => {
  return (
    <AnimatableView>
      <View style={styles.imgContainer}>
        <SvgUri width={200} height={200} uri={uri} />
      </View>
      <View style={styles.badgeContainer}>
        {avatars.map(avatar => (
          <AppBadge
            key={avatar.id}
            title={avatar.title}
            onPress={() => changeSeed(avatar.type)}
            color={avatar.color}
          />
        ))}
      </View>
      <View style={styles.btnContainer}>
        <AppButton color={COLORS.dark} title="Randomize" onPress={randomize} />
        <AppButton
          color={COLORS.secondary}
          title="processed "
          onPress={handleProcessed}
          loading={updateAvatarLoading}
        />
      </View>
    </AnimatableView>
  );
};
//
