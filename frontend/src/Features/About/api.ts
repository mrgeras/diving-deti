import { Coach } from './CoachType';

export const getCoaches = async (): Promise<Coach[]> => {
  const res = await fetch('/api/about');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();

  return data;
};
export default getCoaches;
