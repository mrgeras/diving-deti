export type Message = {
  id: number;
  messageImg: string;
  messageName: string;
  messageText: string;
};
export type MessageAbout = {
  id: number;
  messageImg: string;
  messageName: string;
  messageText: string;
};
export type MessageId = Message['id'];

export type MessageWithOutId = Omit<Message, 'id'>;
