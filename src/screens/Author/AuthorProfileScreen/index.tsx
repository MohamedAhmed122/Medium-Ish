/* eslint-disable curly */
import React from 'react';

import {AppLoading, AppText, Error, Screen} from '@Commons/index';
import {RouteProp} from '@react-navigation/native';
import {
  AuthorParamList,
  AuthorParams,
} from '@Navigation/author-stack/interface';
import {useGetAuthor} from '@GraphQL/query';
import {Header} from '@Components/Header';
import {AuthorInfo} from './AuthorInfo';
import {StackNavigationProp} from '@react-navigation/stack';
import {ArticleCard} from '@Components/AuthorArticleCard';
import {FlatList} from 'react-native';
import styles from './styles';
import {TabParamList, TabParams} from '@Navigation/tab-navigation/interface';
import {Navigators} from '@Navigation/index';

interface AuthorProfileProps {
  route: RouteProp<AuthorParamList, AuthorParams.AuthorProfile>;
  navigation: StackNavigationProp<TabParamList, TabParams>;
}

export const AuthorProfileScreen: React.FC<AuthorProfileProps> = ({
  route,
  navigation,
}) => {
  const {id} = route.params;

  const {loading, author, error} = useGetAuthor(id);

  const onNavigateToArticleDetail = (articleId: string) =>
    navigation.navigate(Navigators.Tab.Article, {
      screen: Navigators.ArticleStack.ArticleDetail,
      params: {id: articleId},
    });

  if (loading) return <AppLoading />;
  if (error || !author) return <Error />;
  return (
    <Screen>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <Header
              title={author.author.name}
              handleGoBack={navigation.goBack}
            />
            <AuthorInfo author={author.author} />
            <AppText style={styles.text} fontFamily="Roboto-Bold">
              My Articles
            </AppText>
          </>
        )}
        data={author.author.article}
        keyExtractor={data => data.id}
        renderItem={({item}) => (
          <ArticleCard
            article={item}
            handleNavigate={() => onNavigateToArticleDetail(item.id)}
          />
        )}
      />
    </Screen>
  );
};
