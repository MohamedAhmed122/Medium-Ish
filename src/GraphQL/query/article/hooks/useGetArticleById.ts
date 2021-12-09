import {useQuery} from '@apollo/client';
import {GET_SINGLE_ARTICLE} from '@GraphQL/query';
import {ParamId} from '@Types/Common';
import {ArticleDetail} from '../types';

export const useGetArticleById = (id: string) => {
  const {data, error, loading, refetch} = useQuery<
    {article: ArticleDetail},
    ParamId
  >(GET_SINGLE_ARTICLE, {
    variables: {id},
  });
  return {data, error, loading, refetch};
};
