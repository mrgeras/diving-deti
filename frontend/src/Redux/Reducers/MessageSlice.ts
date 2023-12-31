import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../Features/Messages/api';
import { MessagesState } from '../../Features/Messages/types/MessageState';
import { MessageId } from '../../Features/Messages/types/MessageTypes';

const initialState: MessagesState = { messages: [], error: '' };

export const messagesInit = createAsyncThunk('messages/init', () =>
  api.getMessages()
);

export const addMessage = createAsyncThunk(
  'messages/add',
  (message: FormData) => api.addMessageFetch(message)
);

export const deleteMessage = createAsyncThunk(
  'articles/delete',
  (value: MessageId) => api.deleteMessageFetch(value)
);

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(messagesInit.fulfilled, (state, action) => {
        state.messages = action.payload;
        state.error = '';
      })
      .addCase(messagesInit.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addMessage.fulfilled, (state, action) => {
        state.messages.push(action.payload);
      })
      .addCase(addMessage.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteMessage.fulfilled, (state, action) => {
        state.messages = state.messages.filter(
          (message) => message.id !== +action.payload
        );
      })
      .addCase(deleteMessage.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default messageSlice.reducer;
