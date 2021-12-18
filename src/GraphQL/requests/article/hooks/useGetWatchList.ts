import {useQuery} from '@apollo/client';
import {GET_WATCH_LIST} from '@GraphQL/requests';

export const useGetWatchList = () => {
  const {loading, data, error} =
    useQuery<{watchListCount: number}>(GET_WATCH_LIST);

  return {loading, data, error};
};
