export type NO_PARAMS = undefined;

export enum PostParams {
  Posts = 'Posts',
  PostDetail = 'PostDetail',
  Settings = 'Settings',
}

export type PostParamsList = {
  Posts: NO_PARAMS;
  PostDetail: {id: string};
  Settings: NO_PARAMS;
};
