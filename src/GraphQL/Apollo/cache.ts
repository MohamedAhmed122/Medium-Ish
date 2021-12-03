import {InMemoryCache, makeVar, ReactiveVar} from '@apollo/client';
import {InitiateAuthor} from '@GraphQL/query';

const watchListVar: ReactiveVar<never[]> = makeVar([]);
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
    // Post: {
    //   fields: {
    //     isInCart: {
    //       read(_, {readField}) {
    //         const id = readField('id');

    //         return watchListVar().find((item: Post) => item.id === id)
    //           ? true
    //           : false;
    //       },
    //     },
    //   },
    // },
  },
});

export {cache, watchListVar, currentAuthor};
// from top to bottom -> rebase
// from bottom to top -> merge
