import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Status} from '@Types/Avatar';
import {AnimatableView, IF} from '@Commons/index';
import {ChoicesButton} from './ChoicesButton';

import t from '@Lib/i18n';
import styles from './styles';

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
          <ChoicesButton icon title={t.uploadPhoto} />
        </IF>
        <IF condition={status === Status.UploadImage}>
          <ChoicesButton title={t.createAvatar} />
        </IF>
      </TouchableOpacity>
    </AnimatableView>
  );
};
