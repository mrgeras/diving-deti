export type Article = {
  id: number;
  articleImg: string;
  articleName: string;
  articleText: string;
  articleText2: string;
};
export type ArticleAbout = {
  id: number;
  articleImg: string;
  articleName: string;
  articleText: string;
  articleText2: string;
};
export type ArticleId = Article['id'];

export type ArticleWithOutId = Omit<Article, 'id'>;
