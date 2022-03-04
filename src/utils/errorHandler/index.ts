import {ApolloError} from '@apollo/client';
import Toast from 'react-native-toast-message';

export const errorHandler = (errors: ApolloError) => {
  const {graphQLErrors, networkError} = errors;

  if (graphQLErrors.length) {
    graphQLErrors.forEach(({message}) => {
      displayError(message);
    });
  } else if (networkError?.result?.errors) {
    console.log(networkError);
    networkError?.result?.errors?.forEach(({message}) => {
      displayError(message);
    });
  } else {
    displayError(errors.message);
  }
};

const displayError = (message: string) => {
  Toast.show({
    type: 'error',
    text1: 'Oops',
    text2: message,
  });
};
