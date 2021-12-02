import {Comment} from '..';
import {Author} from '@GraphQL/query';
export interface Article {
  id: string;
  description: string;
  slug: string;
  likes: number;
  title: string;
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
  richDescription: {
    html: string;
  };
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

export interface UpdateArticleParam
  extends Omit<CreateArticleParam, 'username' | 'categoryId'> {}
