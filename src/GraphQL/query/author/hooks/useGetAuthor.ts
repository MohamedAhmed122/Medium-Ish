import {GET_SINGLE_AUTHOR, AuthorDetail} from '@GraphQL/query';
import {useQuery} from '@apollo/client';
import {ParamId} from '@Types/Common';

export const useGetAuthor = (id: string) => {
  const {data, loading, error, refetch} = useQuery<
    {author: AuthorDetail},
    ParamId
  >(GET_SINGLE_AUTHOR, {
    variables: {id},
  });

  return {author: data, loading, error, refetch};
};
