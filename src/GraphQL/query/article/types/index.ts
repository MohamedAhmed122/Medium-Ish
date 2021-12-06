import {Comment} from './../../comment/interface';
import {HTMLSource} from 'react-native-render-html';

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
    name: string;
  };
  author: Author;
  comments: Comment[];
}

export interface Articles {
  articles: Article[];
}

export interface ArticleDetail extends Article {
  richDescription: HTMLSource;
  author: Author;
}

// TODO: richDescription type
export interface CreateArticleParam {
  authorId: string;
  username: string;
  categoryId: string;
  title: string;
  description: string;
  richDescription: any;
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
