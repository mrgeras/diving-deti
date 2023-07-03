import { Message } from './types/MessageTypes';

export const getMessages = async (): Promise<Message[]> => {
  const res = await fetch('/api/messages');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
// console.log(data);
  return data;
};
export default getMessages;
