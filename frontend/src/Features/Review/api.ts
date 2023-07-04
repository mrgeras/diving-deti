import { Review } from './types/ReviewTypes';

export const getReview = async (): Promise<Review[]> => {
  const res = await fetch('api/reviews');
  const data = await res.json();
  return data;
};

export default getReview;
