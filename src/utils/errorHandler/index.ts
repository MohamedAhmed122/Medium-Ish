import Toast from 'react-native-toast-message';

export const errorHandler = (networkError: any) => {
  console.log(networkError);
  networkError?.result?.errors?.forEach(({message}) => {
    console.log(`[GraphQL error]: Message: ${message} -----`);
    Toast.show({
      type: 'error',
      text1: 'Oops',
      text2: 'message',
    });
  });
};
