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
}

export interface Articles {
  articles: Article[];
}

export interface ArticleDetail extends Article {
  richDescription: {
    html: string;
  };
}
