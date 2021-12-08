/* eslint-disable curly */
import React from 'react';

import {useReactiveVar} from '@apollo/client';
import {currentAuthor} from '@GraphQL/Apollo/cache';
import {useGetAuthor} from '@GraphQL/query';

import {ScrollView} from 'react-native';
import {Header, RowContainer} from './components';
import {Error, AppLoading} from '@Commons/index';
import {authorInfo} from '@Assets/data';

interface AuthorProfileProps {}

export const AuthorProfile: React.FC<AuthorProfileProps> = () => {
  const currentUser = useReactiveVar(currentAuthor);
  const {author, loading, error} = useGetAuthor(currentUser.id);

  if (loading) return <AppLoading />;
  if (error || !author) return <Error />;

  return (
    <ScrollView>
      <Header author={author.author} />
      <RowContainer author={author.author} items={authorInfo} />
    </ScrollView>
  );
};
