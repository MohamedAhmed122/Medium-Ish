import {GET_ARTICLES} from '../query';
import {Articles} from '../types';
import {useQuery} from '@apollo/client';

export const useGetArticles = () => {
  const {data, error, loading, refetch} = useQuery<Articles>(GET_ARTICLES);

  return {
    articles: data,
    articleError: error,
    articleLoading: loading,
    refetch,
  };
};
