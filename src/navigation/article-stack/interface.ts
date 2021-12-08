export type NO_PARAMS = undefined;

export enum ArticleParams {
  Articles = 'Articles',
  ArticleDetail = 'ArticleDetail',
}

export type ArticleParamList = {
  Articles: NO_PARAMS;
  ArticleDetail: {id: string};
};
