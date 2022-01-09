/* eslint-disable curly */
import React, {useState} from 'react';
// TYPES
import {StackNavigationProp} from '@react-navigation/stack';
import {Seed, Status} from '@Types/Avatar';
import {Image as ImagePickerProps} from 'react-native-image-crop-picker';
// UTILS
import {pickImage} from '@Utils/PickImage';
import {getAvatarUri, getRandomNumber} from '@Utils/utils';
// RENDER && STYLE
import {
  RenderAvatarPickers,
  RenderAvatarChoicesButtons,
} from '@Components/Avatar';
import {Screen} from '@Commons/Screen';
import {Header} from '@Components/Header';
import {useUpdateAvatar} from '@GraphQL/requests';
import {useReactiveVar} from '@apollo/client';
import {currentAuthor} from '@GraphQL/Apollo/cache';
import {
  AuthorParamList,
  AuthorParams,
} from '@Navigation/author-stack/interface';
import t from '@Lib/i18n';
import {COLORS} from '@Styles/colors';

interface EditImageProps {
  navigation: StackNavigationProp<AuthorParamList, AuthorParams.EditImage>;
}

export const EditImageScreen: React.FC<EditImageProps> = ({navigation}) => {
  // LOCAL STATE
  const [status, setStatus] = useState<Status>(Status.GenerateAvatar);
  const [seed, setSeed] = useState<Seed>('avataaars');
  const [random, setRandom] = useState<number>(1);
  const [image, setImage] = useState<ImagePickerProps>();

  // GLOBAL VAR
  const currentUser = useReactiveVar(currentAuthor);

  const onUpdateAvatarCompleted = () =>
    navigation.navigate(AuthorParams.AuthorSettings);

  const {updateAvatar, updateAvatarLoading} = useUpdateAvatar(
    onUpdateAvatarCompleted,
  );

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

    value && setImage(value);
  };

  return (
    <Screen scroll>
      <Header
        title={t.chooseAvatar}
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
          loading: false,
        }}
      />
      <RenderAvatarChoicesButtons
        status={status}
        onChoiceAvatar={onChoiceAvatar}
      />
    </Screen>
  );
};
