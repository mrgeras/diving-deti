import { Article, ArticleWithOutId } from './types/ArticlesType';

export const getArticles = async (): Promise<Article[]> => {
  const res = await fetch('/api/articles');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();

  return data;
};

export const addArticleFetch = async (
  article: ArticleWithOutId
): Promise<Article> => {
  const res = await fetch('/api/articles', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(article),
  });

  return res.json();
};

export default getArticles;
