import {gql} from 'graphql-tag';
import {Article, GET_WATCH_LIST} from '@GraphQL/requests';

import {ARTICLE_WATCH_LIST} from '@GraphQL/fragments';

export const ADD_OR_REMOVE_PRODUCT_FROM_FAVORITE = gql`
  mutation AddOrRemoveProductFromFavorite($productId: ID!) {
    addOrRemoveProductFromFavorite(productId: $productId) @client
  }
`;

// ARTICLE_WATCH_LIST
export const FAVORITE_PRODUCT_FRAGMENT = gql`
  fragment FavoriteProductFragment on Product {
    favorite
  }
`;

export const GET_FAVORITE_PRODUCTS_COUNT = gql`
  {
    favoriteProductsCount @client
  }
`;

export const resolvers = {
  Mutation: {
    addOrRemoveArticleToWatchList(
      _root: any,
      args: Article,
      {client, cache}: any,
    ) {
      const articleId = cache.identify({
        __typename: 'Article',
        id: args.id,
      });
      const {favorite} = client.readFragment({
        fragment: ARTICLE_WATCH_LIST,
        id: articleId,
      });
      client.writeFragment({
        fragment: ARTICLE_WATCH_LIST,
        id: articleId,
        data: {
          favorite: !favorite,
        },
      });
      const {watchListCount} = client.readQuery({
        query: GET_WATCH_LIST,
      });
      client.writeQuery({
        query: GET_WATCH_LIST,
        data: {
          watchListCount: favorite ? watchListCount - 1 : watchListCount + 1,
        },
      });
    },
  },
};
