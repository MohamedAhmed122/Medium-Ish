import React, {useState} from 'react';
// TYPES
import {AuthParamList, AuthParams} from '@Navigation/AuthNavigator/interface';
import {StackNavigationProp} from '@react-navigation/stack';
import {Seed, Status} from '@Types/Avatar';
// UTILS
import {pickImage} from '@Utils/PickImage';
import {getAvatarUri, getRandomNumber} from '@Utils/utils';
// RENDER && STYLE
import {RenderAvatarChoicesButtons, RenderAvatarPickers} from './components';
import {Screen} from '@Commons/Screen';
import {Header} from '@Components/Header';
import {COLORS} from '@Styles/colors';

interface AvatarScreenProps {
  navigation: StackNavigationProp<AuthParamList, AuthParams.UserAvatar>;
}

export const AvatarScreen: React.FC<AvatarScreenProps> = ({navigation}) => {
  const [status, setStatus] = useState<Status>(Status.Default);
  const [seed, setSeed] = useState<Seed>('avataaars');
  const [random, setRandom] = useState<number>(1);
  const [image, setImage] = useState<string>('');

  const changeSeed = (type: Seed): void => setSeed(type);

  const randomize = (): void => setRandom(getRandomNumber());

  const uri = getAvatarUri(seed, random);

  const handleProcessed = (): void => {
    navigation.navigate(AuthParams.UserBio);
  };

  const onChoiceAvatar = (type: Status): void => setStatus(type);

  const handleGoBack = (): void =>
    status === Status.Default ? navigation.goBack() : setStatus(Status.Default);

  const handlePickImage = async () => {
    const value = await pickImage();
    value && setImage(value.path);
  };

  return (
    <Screen>
      <Header
        title="Choose Avatar"
        color={COLORS.primary}
        handleGoBack={handleGoBack}
      />
      <RenderAvatarChoicesButtons
        status={status}
        onChoiceAvatar={onChoiceAvatar}
      />
      <RenderAvatarPickers
        status={status}
        avatar={{
          changeSeed,
          randomize,
          uri,
          handleProcessed,
        }}
        image={{image, handlePickImage}}
      />
    </Screen>
  );
};
