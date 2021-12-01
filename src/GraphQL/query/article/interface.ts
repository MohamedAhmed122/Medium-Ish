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
  author: {
    username: string;
    image: {
      url: string;
    };
  };
}

export interface Articles {
  articles: Article[];
}
