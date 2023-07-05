import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../Features/Requests/api';
import {
  ObjRequest,
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

export const loadRequests2 = createAsyncThunk('request/load2', () =>
  api.loadRequestsFetch2()
);

export const addRequest = createAsyncThunk(
  'request/add',
  (request: RequestWithOutId) => api.addRequestFetch(request)
);

export const updateRequests = createAsyncThunk(
  'request/update',
  (value: ObjRequest) => api.updateRequestsFetch(value)
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
      })
      .addCase(addRequest.fulfilled, (state, action) => {
        state.requests.push(action.payload);
      })
      .addCase(addRequest.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateRequests.fulfilled, (state, action) => {
        state.requests = state.requests.map((request) =>
          request.id === action.payload.id ? action.payload : request
        );
      })
      .addCase(updateRequests.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadRequests2.fulfilled, (state, action) => {
        state.requests = action.payload;
        state.error = '';
      })
      .addCase(loadRequests2.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default RequestSlice.reducer;
