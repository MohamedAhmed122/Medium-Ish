import {InMemoryCache, makeVar, ReactiveVar} from '@apollo/client';
import {InitiateAuthor, Article} from '@GraphQL/query';

const watchListVar: ReactiveVar<Article[] | any> = makeVar([]);
const currentAuthor: ReactiveVar<InitiateAuthor | any> = makeVar({});

// TODO: ADD the First Screens

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return watchListVar();
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

export {cache, watchListVar, currentAuthor};
// from top to bottom -> rebase
// from bottom to top -> merge
