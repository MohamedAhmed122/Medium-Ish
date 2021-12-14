import React from 'react';
import {FlatList} from 'react-native';

import {Article, Author} from '@GraphQL/query';

import {AppLoading, Screen} from '@Commons/index';
import {ArticleCard} from '@Components/ArticleCard';
import {FeaturedFlatList} from '@Components/FeaturedFlatList';
import {UserList} from '../UserList';

import styles from './styles';

interface ArticlesViewProps {
  onRefresh(): void;
  articleLoading: boolean;
  authors: {authors: Author[]};
  authorLoading: boolean;
  handleNavigateToProfile(id: string): void;
  articles: {articles: Article[]};
  handleNavigate(id: string): void;
  handleWatchListItems(article: Article): void;
}

export const ArticlesView: React.FC<ArticlesViewProps> = ({
  onRefresh,
  articleLoading,
  authors,
  authorLoading,
  handleNavigateToProfile,
  articles,
  handleNavigate,
  handleWatchListItems,
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
                  <UserList
                    item={item}
                    handleNavigateToProfile={handleNavigateToProfile}
                  />
                )}
                ListEmptyComponent={AppLoading}
              />
            )}
          </>
        )}
        data={articles.articles}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ArticleCard
            item={item}
            handleNavigate={handleNavigate}
            handleWatchListItems={handleWatchListItems}
          />
        )}
      />
    </Screen>
  );
};
