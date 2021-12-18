import {InMemoryCache, makeVar, ReactiveVar} from '@apollo/client';

import {InitiateAuthor, Article} from '@GraphQL/requests';

const watchListVar: ReactiveVar<Article[] | any> = makeVar([]);
const currentAuthor: ReactiveVar<InitiateAuthor | any> = makeVar({});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        watchList: {
          read(watchList = false) {
            return watchList;
          },
        },
        currentAuthor: {
          read() {
            return currentAuthor();
          },
        },
      },
    },
    Article: {
      fields: {
        isOnWatchList: {
          read(_, {readField}) {
            const id = readField('id');

            return watchListVar().find((item: Article) => item.id === id)
              ? true
              : false;
          },
        },
      },
    },
  },
});

// persistCache({
//   cache,
//   storage: new AsyncStorageWrapper(AsyncStorage),
// });

export {cache, watchListVar, currentAuthor};
// from top to bottom -> rebase
// from bottom to top -> merge
