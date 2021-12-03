/* eslint-disable curly */
import React, {useState} from 'react';
// TYPES
import {AuthParamList, AuthParams} from '@Navigation/AuthNavigator/interface';
import {StackNavigationProp} from '@react-navigation/stack';
import {Seed, Status} from '@Types/Avatar';
import {Image as ImagePickerProps} from 'react-native-image-crop-picker';
// UTILS
import {pickImage} from '@Utils/PickImage';
import {getAvatarUri, getRandomNumber} from '@Utils/utils';
// RENDER && STYLE
import {RenderAvatarChoicesButtons, RenderAvatarPickers} from './components';
import {Screen} from '@Commons/Screen';
import {Header} from '@Components/Header';
import {COLORS} from '@Styles/colors';
import {useUpdateAvatar} from '@GraphQL/query';
import {useReactiveVar} from '@apollo/client';
import {currentAuthor} from '@GraphQL/Apollo/cache';

interface AvatarScreenProps {
  navigation: StackNavigationProp<AuthParamList, AuthParams.UserAvatar>;
}

export const AvatarScreen: React.FC<AvatarScreenProps> = ({navigation}) => {
  // LOCAL STATE
  const [status, setStatus] = useState<Status>(Status.GenerateAvatar);
  const [seed, setSeed] = useState<Seed>('avataaars');
  const [random, setRandom] = useState<number>(1);
  const [image, setImage] = useState<ImagePickerProps>();

  // GLOBAL VAR
  const currentUser = useReactiveVar(currentAuthor);

  const {updateAvatar, updateAvatarLoading} = useUpdateAvatar(navigation);

  const changeSeed = (type: Seed): void => setSeed(type);

  const randomize = (): void => setRandom(getRandomNumber());

  const uri = getAvatarUri(seed, random);

  const handleProcessedAvatar = (): void => {
    updateAvatar({
      variables: {id: currentUser.id, imageUrl: uri},
    });
  };

  const handleProcessedUploadPhoto = () => {
    if (!image) return;
  };

  const onChoiceAvatar = (): void =>
    status === Status.GenerateAvatar
      ? setStatus(Status.UploadImage)
      : setStatus(Status.GenerateAvatar);

  const handleGoBack = (): void =>
    status === Status.GenerateAvatar
      ? navigation.goBack()
      : setStatus(Status.GenerateAvatar);

  const handlePickImage = async () => {
    const value = await pickImage();
    console.log(value);
    // uri:
    // Platform.OS === 'android'
    //   ? file.uri
    //   : file.uri.replace('file://', ''),
    value && setImage(value);
  };

  return (
    <Screen>
      <Header
        title="Choose Avatar"
        color={COLORS.primary}
        handleGoBack={handleGoBack}
      />
      <RenderAvatarPickers
        status={status}
        avatar={{
          changeSeed,
          randomize,
          uri,
          handleProcessed: handleProcessedAvatar,
          updateAvatarLoading,
        }}
        image={{
          image,
          handlePickImage,
          handleProcessed: handleProcessedUploadPhoto,
        }}
      />
      <RenderAvatarChoicesButtons
        status={status}
        onChoiceAvatar={onChoiceAvatar}
      />
    </Screen>
  );
};
