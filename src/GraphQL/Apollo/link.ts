import {HttpLink} from '@apollo/client';
import {onError} from '@apollo/client/link/error';

const baseURL = {
  dev: 'http://localhost:5000',
  dev1: 'https://api-ap-northeast-1.graphcms.com/v2/ckwhjc6l90ymo01xnarxj4q7k/master',
};

const httpLink = new HttpLink({
  uri: baseURL.dev1,
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

export {httpLink, errorLink};
