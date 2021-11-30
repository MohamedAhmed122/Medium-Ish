import {InMemoryCache, makeVar, ReactiveVar} from '@apollo/client';

import {Post} from '@GraphQL/query';

const watchListVar: ReactiveVar<Post[] | any> = makeVar([]);

// TODO: Test the New GRAPHQL APIs
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
      },
    },
    Post: {
      fields: {
        isInCart: {
          read(_, {readField}) {
            const id = readField('id');

            return watchListVar().find((item: Post) => item.id === id)
              ? true
              : false;
          },
        },
      },
    },
  },
});

export {cache, watchListVar};
