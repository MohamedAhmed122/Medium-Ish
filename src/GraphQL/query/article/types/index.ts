import {ColorType, Comment} from '@GraphQL/query';
// import {HTMLSource} from 'react-native-render-html';

import {Author} from '@GraphQL/query';
export interface Article {
  id: string;
  description: string;
  slug: string;
  likes: number;
  title: string;
  isOnWatchList: boolean;
  category: {
    id: string;
    label: string;
    color: ColorType;
  };
  author: Author;
  comments: Comment[];
}

export interface Articles {
  articles: Article[];
}

export interface ArticleDetail extends Article {
  richDescription: string;
  author: Author;
}

export interface CreateArticleParam {
  authorId: string;
  username: string;
  categoryId: string;
  title: string;
  description: string;
  richDescription: string;
}

export interface SearchArticle {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  author: Author;
}

export interface UpdateArticleParam
  extends Omit<CreateArticleParam, 'username' | 'categoryId'> {}
