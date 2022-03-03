/* eslint-disable curly */
import React from 'react';
import {FlatList} from 'react-native';

import {Screen, Empty, AppLoading, Error} from '@Commons/index';
import {RouteProp} from '@react-navigation/native';
import {
  AuthorParamList,
  AuthorParams,
} from '@Navigation/author-stack/interface';
import {useGetAuthorArticles} from '@GraphQL/requests';
import {RootNavigation} from '@Navigation/app-navigation/interface';

import {ArticleCard} from '@Components/AuthorArticleCard';
import {ArticleParams} from '@Navigation/article-stack/interface';
import {Header} from '@Components/Header';

import styles from './styles';
import {COLORS} from '@Styles/colors';

interface AuthorArticlesProps {
  route: RouteProp<AuthorParamList, AuthorParams.AuthorArticles>;
  navigation: RootNavigation;
}

export const AuthorArticlesScreen: React.FC<AuthorArticlesProps> = ({
  route,
  navigation,
}) => {
  const {id} = route.params;
  const {loading, articles, error} = useGetAuthorArticles(id);

  const handleNavigate = (articleId: string) => {
    navigation.navigate(ArticleParams.ArticleDetail, {id: articleId});
  };

  if (loading) return <AppLoading />;
  if (error || !articles) return <Error />;
  return (
    <Screen>
      <FlatList
        ListHeaderComponent={() => (
          <Header
            handleGoBack={navigation.goBack}
            title={'Mohamed Youssef'}
            color={COLORS.primary}
          />
        )}
        ListHeaderComponentStyle={styles.listHeaderComponentStyle}
        data={articles.articles}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ArticleCard
            handleNavigate={() => handleNavigate(item.id)}
            article={item}
          />
        )}
        ListEmptyComponent={Empty}
      />
    </Screen>
  );
};
