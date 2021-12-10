import {useQuery} from '@apollo/client';

import {Article, GET_ARTICLES_BY_AUTHOR_ID} from '@GraphQL/query';
import {ParamId} from '@Types/Common';

export const useGetAuthorArticles = (id: string) => {
  const {loading, error, data} = useQuery<{articles: Article[]}, ParamId>(
    GET_ARTICLES_BY_AUTHOR_ID,
    {
      variables: {id},
    },
  );
  return {loading, error, articles: data};
};
