export interface Post {
  id: string;
  body: string;
  createdAt: string;
  username: string;
  likeCount?: number;
  commentLike?: number;
}
