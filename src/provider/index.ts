import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  makeVar,
  gql,
} from '@apollo/client';
import {onError} from '@apollo/client/link/error';

export const cartItemsVar = makeVar([]);

const baseURL = {
  dev: 'http://localhost:5000',
};

const httpLink = new HttpLink({
  uri: baseURL.dev,
});

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({message, locations, path}) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

// export const cache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {

//       },
//     },
//   },
// });
const cache = new InMemoryCache({});

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;
cache.writeQuery({
  query: IS_LOGGED_IN,
  data: {
    isLoggedIn: true,
  },
});

export const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});
