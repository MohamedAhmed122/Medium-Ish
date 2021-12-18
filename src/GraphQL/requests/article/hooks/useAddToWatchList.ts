import {useMutation} from '@apollo/client';
import {ADD_OR_REMOVE_ARTICLE_WaTCH_LIST} from '@GraphQL/requests';

export const useAddToWatchList = () => {
  const [addToWatchList, {data, loading, error}] = useMutation<
    null,
    {articleId: string}
  >(ADD_OR_REMOVE_ARTICLE_WaTCH_LIST, {
    onError: err => {
      console.log(err, 'errors');
    },
  });

  return {addToWatchList, carts: data, cartLoading: loading, cartError: error};
};
