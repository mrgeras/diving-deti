import { Message } from './MessageTypes';

export type MessagesState = {
  messages: Message[];
  error: string | undefined;
};
export type MessagesAboutState = {
  message: Message[];
  error: string | undefined;
};
