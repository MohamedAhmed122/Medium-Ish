import {useQuery, ApolloError} from '@apollo/client';
import {GET_SINGLE_ARTICLE} from '@GraphQL/query';
import {ParamId} from '@Types/Common';
import {ArticleDetail} from '../types';

interface UseGetArticleById {
  data?: {article: ArticleDetail};
  error?: ApolloError;
  loading: boolean;
}

export const useGetArticleById = (id: string): UseGetArticleById => {
  const {data, error, loading} = useQuery<{article: ArticleDetail}, ParamId>(
    GET_SINGLE_ARTICLE,
    {
      variables: {id},
    },
  );
  return {data, error, loading};
};
