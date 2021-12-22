import {GET_SINGLE_AUTHOR, AuthorDetail} from '@GraphQL/requests';
import {useQuery} from '@apollo/client';
import {Nullable, ParamId} from '@Types/Common';

export const useGetAuthor = (id: Nullable<string>) => {
  const {data, loading, error, refetch} = useQuery<
    {author: AuthorDetail},
    ParamId
  >(GET_SINGLE_AUTHOR, {
    skip: id === null,
    variables: {id},
  });

  return {author: data, loading, error, refetch};
};
