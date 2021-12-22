import React from 'react';
import {View} from 'react-native';
import {SvgUri} from 'react-native-svg';

import {Seed} from '@Types/Avatar';
import {AnimatableView, AppBadge, AppButton} from '@Commons/index';

import t from '@Lib/i18n';
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
        <AppButton
          color={COLORS.dark}
          title={t.randomize}
          onPress={randomize}
        />
        <AppButton
          color={COLORS.secondary}
          title={t.processed}
          onPress={handleProcessed}
          loading={updateAvatarLoading}
        />
      </View>
    </AnimatableView>
  );
};
//
