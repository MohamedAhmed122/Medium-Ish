import React from 'react';

import {Status} from '@Types/Avatar';

import {AnimatableView, IF} from '@Commons/index';
import {TouchableOpacity} from 'react-native';

import styles from './styles';

import {ChoicesButton} from './ChoicesButton';

interface Props {
  status: Status;
  onChoiceAvatar(): void;
}

export const RenderAvatarChoicesButtons: React.FC<Props> = ({
  status,
  onChoiceAvatar,
}) => {
  return (
    <AnimatableView style={styles.container}>
      <TouchableOpacity onPress={onChoiceAvatar} style={styles.buttonContainer}>
        <IF condition={status === Status.GenerateAvatar}>
          <ChoicesButton icon title="Upload Photo" />
        </IF>
        <IF condition={status === Status.UploadImage}>
          <ChoicesButton title="Create Avatar" />
        </IF>
      </TouchableOpacity>
    </AnimatableView>
  );
};
