import React from 'react';

import {Screen} from '@Commons/index';
import {RouteProp} from '@react-navigation/native';
import {
  AuthorParamList,
  AuthorParams,
} from '@Navigation/author-stack/interface';
import {EditProfileFrom, EditProfileImage} from './components';
import {EditProfileValue, initialFormValues} from '@Types/Form';
import {Header} from '@Components/Header';
import {StackNavigationProp} from '@react-navigation/stack';
import {useEditAuthorData} from '@GraphQL/query';

interface EditProfileProps {
  route: RouteProp<AuthorParamList, AuthorParams.EditProfile>;
  navigation: StackNavigationProp<AuthorParamList, AuthorParams.EditProfile>;
}

export const EditProfileScreen: React.FC<EditProfileProps> = ({
  route,
  navigation,
}) => {
  const {author} = route.params;

  const {editProfile, loading} = useEditAuthorData();

  const handleSubmit = (values: initialFormValues) => {
    const newValue = values as EditProfileValue;
    editProfile({
      variables: {
        id: author.id,
        name: newValue.name,
        email: newValue.email,
        bio: newValue.bio,
        hex: newValue.color?.color || author?.color?.hex,
      },
    });
  };

  const onNavigateToEditImage = () =>
    navigation.navigate(AuthorParams.EditImage);

  return (
    <Screen scroll>
      <Header title="Edit Profile" handleGoBack={navigation.goBack} />
      <EditProfileImage
        author={author}
        handleNavigation={onNavigateToEditImage}
      />
      <EditProfileFrom
        handleSubmit={handleSubmit}
        loading={loading}
        author={author}
      />
    </Screen>
  );
};
