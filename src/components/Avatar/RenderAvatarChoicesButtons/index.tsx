import React from 'react';

import {Status} from '@Types/Avatar';

import {AnimatableView, IF} from '@Commons/index';
import {TouchableOpacity} from 'react-native';

import styles from './styles';

import {ChoicesButton} from './ChoicesButton';
import t from '@Lib/i18n';

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
        <IF condition={status === Status.GenerateAvatar} style={styles.button}>
          <ChoicesButton icon title={t.uploadPhoto} />
        </IF>
        <IF condition={status === Status.UploadImage} style={styles.button}>
          <ChoicesButton title={t.createAvatar} />
        </IF>
      </TouchableOpacity>
    </AnimatableView>
  );
};
