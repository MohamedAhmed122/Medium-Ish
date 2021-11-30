import React, {useState} from 'react';
import {AppButton, Screen} from '@Commons/index';
import {Header} from '@Components/Header';
import {COLORS} from '@Styles/colors';
import {RenderAvatarChoicesButtons, RenderAvatarPickers} from './components';
import {Seed, Status} from '@Types/Avatar';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthParamList, AuthParams} from '@Navigation/AuthNavigator/interface';

// https://avatars.dicebear.com/api/personas/3.svg

// import styles from './styles'

interface AvatarScreenProps {
  navigation: StackNavigationProp<AuthParamList, AuthParams.UserAvatar>;
}

export const AvatarScreen: React.FC<AvatarScreenProps> = ({navigation}) => {
  const [status, setStatus] = useState<Status>(Status.Default);
  const [seed, setSeed] = useState<Seed>('avataaars');
  const [random, setRandom] = useState<number>(1);

  const changeSeed = (type: Seed): void => setSeed(type);

  const randomize = (): void => setRandom(Math.floor(Math.random() * 1120 + 1));

  const uri = `https://avatars.dicebear.com/api/${seed}/${random}.svg`;

  const handleProcessed = () => {
    navigation.navigate(AuthParams.UserBio);
  };

  const onChoiceAvatar = (type: Status) => setStatus(type);

  return (
    <Screen>
      <Header
        title="Upload your image"
        color={COLORS.primary}
        handleGoBack={() => {}}
      />
      <RenderAvatarChoicesButtons
        status={status}
        onChoiceAvatar={onChoiceAvatar}
      />
      <RenderAvatarPickers
        changeSeed={changeSeed}
        randomize={randomize}
        uri={uri}
        handleProcessed={handleProcessed}
        status={status}
      />
    </Screen>
  );
};
