import { Message, MessageId, MessageWithOutId } from './types/MessageTypes';

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

export const addMessageFetch = async (
  message: MessageWithOutId
): Promise<Message> => {
  const res = await fetch('/api/messages', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(message),
  });

  return res.json();
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
