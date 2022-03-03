import {Nullable} from '@Types/Common';
import {useQuery, ApolloError} from '@apollo/client';
import {GET_AUTHORS} from '../query';
import {Author} from '../types';

interface Authors {
  authors: Author[];
}

interface UseGetAuthors {
  authorLoading: boolean;
  authors: Nullable<Authors>;
  authorError?: ApolloError;
}

export const useGetAuthors = (): UseGetAuthors => {
  const {loading, data, error} = useQuery<Authors>(GET_AUTHORS);

  return {authorLoading: loading, authors: data, authorError: error};
};
