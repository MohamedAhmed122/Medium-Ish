import {Nullable} from '@Types/Common';
import {useQuery} from '@apollo/client';
import {GET_AUTHORS} from '../query';
import {Author} from '../types';

interface Authors {
  authors: Author[];
}

interface UseGetAuthors {
  authorLoading: boolean;
  authors: Nullable<Authors>;
}

export const useGetAuthors = (): UseGetAuthors => {
  const {loading, data} = useQuery<Authors>(GET_AUTHORS);

  return {authorLoading: loading, authors: data};
};
