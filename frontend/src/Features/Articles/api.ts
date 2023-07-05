import { Article, ArticleId, ArticleWithOutId } from './types/ArticlesType';

export const getArticles = async (): Promise<Article[]> => {
  const res = await fetch('/api/articles');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();

  return data;
};

export const addArticleFetch = async (article: FormData): Promise<Article> => {
  const res = await fetch('/api/articles', {
    method: 'POST',
    body: article,
  });

  return res.json();
};

export const deleteArticleFetch = async (
  value: ArticleId
): Promise<ArticleId> => {
  const res = await fetch(`/api/articles/${value}`, {
    method: 'DELETE',
  });
  return res.json();
};

export default getArticles;
