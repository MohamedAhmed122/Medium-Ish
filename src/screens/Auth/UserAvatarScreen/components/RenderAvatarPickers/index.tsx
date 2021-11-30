import React from 'react';
import {Seed, Status} from '@Types/Avatar';
import {GenerateAvatar} from '../GenerateAvatar';
import {Choose, When} from '@Commons/index';
import {Text, View} from 'react-native';

export interface GenerateAvatarProps {
  changeSeed(type: Seed): void;
  randomize(): void;
  handleProcessed(): void;
  uri: string;
}

interface RenderAvatarPickersProps extends GenerateAvatarProps {
  status: Status;
}

export const RenderAvatarPickers: React.FC<RenderAvatarPickersProps> = ({
  uri,
  changeSeed,
  randomize,
  handleProcessed,
  status,
}) => {
  return (
    <Choose>
      <When condition={status === Status.GenerateAvatar}>
        <GenerateAvatar
          changeSeed={changeSeed}
          randomize={randomize}
          uri={uri}
          handleProcessed={handleProcessed}
        />
      </When>
      <When condition={status === Status.UploadImage}>
        <View>
          <Text>Working on it</Text>
        </View>
      </When>
    </Choose>
  );
};
