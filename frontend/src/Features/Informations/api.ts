import { Information } from './types/InfoTypes';

export const getInformations = async (): Promise<Information[]> => {
  const res = await fetch('/api/informations');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
// console.log(data);
  return data;
};
export default getInformations;
