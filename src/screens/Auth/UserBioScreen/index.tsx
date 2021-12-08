import React from 'react';

import {RootNavigation} from '@Navigation/app-navigation/interface';
import {BioValues, initialFormValues} from '@Types/Form';

import {Screen} from '@Commons/Screen';
import {Header} from '@Components/Header';
import {FromBio} from './FromBio';

import {COLORS} from '@Styles/colors';
import {useReactiveVar} from '@apollo/client';
import {currentAuthor} from '@GraphQL/Apollo/cache';
import {useAddBio} from '@GraphQL/query';

// import styles from './styles'

interface UserBioScreenProps {
  navigation: RootNavigation;
}

export const UserBioScreen: React.FC<UserBioScreenProps> = ({navigation}) => {
  // GLOBAL VAR
  const currentUser = useReactiveVar(currentAuthor);

  const {addBio, loading} = useAddBio(navigation);

  const navigateBack = (): void => navigation.goBack();
  const handleSubmit = (value: initialFormValues) => {
    const newValue = value as BioValues;

    addBio({
      variables: {
        hex: newValue.color?.color || COLORS.primary,
        bio: newValue.bio,
        id: currentUser.id,
      },
    });
  };

  return (
    <Screen>
      <Header title="Bio" handleGoBack={navigateBack} color={COLORS.primary} />
      <FromBio handleSubmit={handleSubmit} loading={loading} />
    </Screen>
  );
};
