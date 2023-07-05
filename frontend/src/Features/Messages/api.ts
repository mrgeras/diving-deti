import { Message, MessageId } from './types/MessageTypes';

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

export const addMessageFetch = async (message: FormData): Promise<Message> => {
  const res = await fetch('/api/messages', {
    method: 'POST',
    body: message,
  });
  const data = await res.json();
  return data;
};

export const deleteMessageFetch = async (
  value: MessageId
): Promise<MessageId> => {
  const res = await fetch(`/api/messages/${value}`, {
    method: 'DELETE',
  });
  return res.json();
};

export default getMessages;
