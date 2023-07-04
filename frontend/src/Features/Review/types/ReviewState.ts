import { Review } from './ReviewTypes';

export type ReviewState = {
  rewiews: Review[];
  error: string | undefined;
};
