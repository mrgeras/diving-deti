import { Article } from './ArticlesType';

export type ArticlesState = {
  articles: Article[];
  error: string | undefined;
};
export type ArticleAboutState = {
  article: Article[];
  error: string | undefined;
};
