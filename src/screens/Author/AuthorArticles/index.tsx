/* eslint-disable curly */
import React from 'react';

import {Screen, Empty, AppLoading, Error} from '@Commons/index';
import {RouteProp} from '@react-navigation/native';
import {
  AuthorParamList,
  AuthorParams,
} from '@Navigation/author-stack/interface';
import {useGetAuthorArticles} from '@GraphQL/query';
import {ArticleCard} from './ArticleCard';
import {FlatList} from 'react-native';
// import {StackNavigationProp} from '@react-navigation/stack';
import {RootNavigation} from '@Navigation/app-navigation/interface';
import {ArticleParams} from '@Navigation/article-stack/interface';

interface AuthorArticlesProps {
  route: RouteProp<AuthorParamList, AuthorParams.AuthorArticles>;
  navigation: RootNavigation;
}

export const AuthorArticles: React.FC<AuthorArticlesProps> = ({
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
