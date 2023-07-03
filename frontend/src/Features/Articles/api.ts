import { Article } from './types/ArticlesType';

export const getArticles = async (): Promise<Article[]> => {
  const res = await fetch('/api/articles');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();

  return data;
};
export default getArticles;
