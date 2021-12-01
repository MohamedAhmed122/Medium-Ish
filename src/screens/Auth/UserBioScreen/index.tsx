import React from 'react';

import {RootNavigation} from '@Navigation/AppNavigation/interface';
import {Navigators} from '@Navigation/index';
import {BioValues, initialFormValues} from '@Types/Form';

import {Screen} from '@Commons/Screen';
import {Header} from '@Components/Header';
import {FromBio} from './FromBio';

import {COLORS} from '@Styles/colors';

// import styles from './styles'

interface UserBioScreenProps {
  navigation: RootNavigation;
}

export const UserBioScreen: React.FC<UserBioScreenProps> = ({navigation}) => {
  const navigateBack = (): void => navigation.goBack();
  const handleSubmit = (value: initialFormValues) => {
    const newValue = value as BioValues;
    console.log(newValue);

    navigation.reset({
      index: 0,
      routes: [{name: Navigators.App.TabNavigation}],
    });
  };

  return (
    <Screen>
      <Header title="Bio" handleGoBack={navigateBack} color={COLORS.primary} />
      <FromBio handleSubmit={handleSubmit} />
    </Screen>
  );
};
