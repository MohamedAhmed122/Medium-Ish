import React from 'react';
import {FlatList} from 'react-native';

import {Article, Author} from '@GraphQL/requests';

import {AppLoading, Screen} from '@Commons/index';
import {ArticleCard, ArticleCardProps} from '@Components/ArticleCard';
import {FeaturedFlatList} from '@Components/FeaturedFlatList';
import {UserList, UserListProps} from '../UserList';

import styles from './styles';

interface ArticlesViewProps {
  articleProps: Omit<ArticleCardProps, 'item'>;
  userListProps: Omit<UserListProps, 'item'>;
  articleLoading: boolean;
  authorLoading: boolean;
  authors: {authors: Author[]};
  articles: {articles: Article[]};
  onRefresh(): void;
}

export const ArticlesView: React.FC<ArticlesViewProps> = ({
  onRefresh,
  articleLoading,
  authors,
  authorLoading,
  articles,
  articleProps,
  userListProps,
}) => {
  return (
    <Screen>
      <FlatList
        onRefresh={onRefresh}
        refreshing={articleLoading}
        ListHeaderComponentStyle={styles.header}
        ListHeaderComponent={() => (
          <>
            {authors && (
              <FeaturedFlatList
                loading={authorLoading}
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={item => item.id}
                data={authors.authors}
                renderItem={({item}) => (
                  <UserList item={item} {...userListProps} />
                )}
                ListEmptyComponent={AppLoading}
              />
            )}
          </>
        )}
        data={articles.articles}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ArticleCard item={item} {...articleProps} />}
      />
    </Screen>
  );
};
