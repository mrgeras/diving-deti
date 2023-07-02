export type Article = {
  id: number;
  article_img: string;
  article_name: string;
  description: string;
};
export type ArticleAbout = {
  id: number;
  article_img: string;
  article_name: string;
  description: string;
};
export type ArticleId = Article['id'];
