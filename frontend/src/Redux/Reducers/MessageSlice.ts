import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../Features/Messages/api';
import { MessagesState } from '../../Features/Messages/types/MessageState';

const initialState: MessagesState = { messages: [], error: '' };

export const messagesInit = createAsyncThunk('messages/init', () =>
  api.getMessages()
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
      });
  },
});

export default messageSlice.reducer;
