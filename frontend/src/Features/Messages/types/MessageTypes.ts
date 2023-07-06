export type Message = {
  id: number;
  messageImg: string;
  messageName: string;
  messageText: string;
  messageText2: string;
};
export type MessageAbout = {
  id: number;
  messageImg: string;
  messageName: string;
  messageText: string;
  messageText2: string;
};
export type MessageId = Message['id'];

export type MessageWithOutId = Omit<Message, 'id'>;
