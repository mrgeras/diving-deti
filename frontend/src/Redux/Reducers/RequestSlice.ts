import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../Features/Requests/api';
import {
  RequestState,
  RequestWithOutId,
} from '../../Features/Requests/types/request';

const initialState: RequestState = {
  requests: [],
  error: undefined,
};

export const loadRequests = createAsyncThunk('request/load', () =>
  api.loadRequestsFetch()
);

export const addRequest = createAsyncThunk(
  'request/add',
  (request: RequestWithOutId) => api.addRequestFetch(request)
);

const RequestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadRequests.fulfilled, (state, action) => {
        state.requests = action.payload;
        state.error = '';
      })
      .addCase(loadRequests.rejected, (state, action) => {
        state.error = action.error.message;
      });
    //   .addCase(addMessage.fulfilled, (state, action) => {
    //     state.messages.push(action.payload);
    //   })
    //   .addCase(addMessage.rejected, (state, action) => {
    //     state.error = action.error.message;
    //   })
    //   .addCase(deleteMessage.fulfilled, (state, action) => {
    //     state.messages = state.messages.filter(
    //       (message) => message.id !== +action.payload
    //     );
    //   })
    //   .addCase(deleteMessage.rejected, (state, action) => {
    //     state.error = action.error.message;
    //   });
  },
});

export default RequestSlice.reducer;
