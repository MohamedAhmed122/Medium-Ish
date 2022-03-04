import {errorHandler} from '@Utils/errorHandler';
import {useMutation} from '@apollo/client';
import {LIKE_ARTICLE} from '@GraphQL/requests';

interface LikeParams {
  id: number;
  likes: number;
}
export const useLikeArticle = () => {
  const [likeOrDisLikeArticle, {data, error, loading}] = useMutation<
    {likes: number},
    LikeParams
  >(LIKE_ARTICLE, {
    onCompleted: () => {
      console.log('YES');
    },
    onError: err => {
      console.log('Error');
      errorHandler(err);
    },
  });
  return {likes: data, error, likeLoading: loading, likeOrDisLikeArticle};
};
