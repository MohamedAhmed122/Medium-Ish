import {Article, GET_WATCH_LIST} from '@GraphQL/requests';

import {ARTICLE_WATCH_LIST} from '@GraphQL/fragments';

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
      const {watchList} = client.readFragment({
        fragment: ARTICLE_WATCH_LIST,
        id: articleId,
      });
      client.writeFragment({
        fragment: ARTICLE_WATCH_LIST,
        id: articleId,
        data: {
          watchList: !watchList,
        },
      });
      const {watchListCount} = client.readQuery({
        query: GET_WATCH_LIST,
      });
      client.writeQuery({
        query: GET_WATCH_LIST,
        data: {
          watchListCount: watchList ? watchListCount - 1 : watchListCount + 1,
        },
      });
    },
  },
};
