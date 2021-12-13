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
import {RenderAvatarChoicesButtons} from '@Components/RenderAvatarChoicesButtons';
import {RenderAvatarPickers} from '@Components/RenderAvatarPickers';
import {Screen} from '@Commons/Screen';
import {Header} from '@Components/Header';
import {COLORS} from '@Styles/colors';
import {useUpdateAvatar} from '@GraphQL/query';
import {useReactiveVar} from '@apollo/client';
import {currentAuthor} from '@GraphQL/Apollo/cache';
import {
  AuthorParamList,
  AuthorParams,
} from '@Navigation/author-stack/interface';

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

  const {updateAvatar, updateAvatarLoading} = useUpdateAvatar();

  // const {uploadImageLoading, data, uploadImage} = useUploadImage();

  const changeSeed = (type: Seed): void => setSeed(type);

  const randomize = (): void => setRandom(getRandomNumber());

  const uri = getAvatarUri(seed, random);

  const handleProcessedAvatar = (): void => {
    console.log('here', currentUser.id, uri);
    updateAvatar({
      variables: {id: currentUser.id, imageUrl: uri},
      errorPolicy: 'ignore',
      onCompleted: () => {
        navigation.navigate(AuthorParams.AuthorProfile);
      },
    });
  };
  console.log(image);

  const handleProcessedUploadPhoto = () => {
    if (!image) return;
    // uploadImage({
    //   variables: {
    //     fileName: image.filename || `${Date.now()}.jpg`,
    //     id: currentUser.id,
    //     handle: image.path.replace('file://', ''),
    //   },
    // });
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
