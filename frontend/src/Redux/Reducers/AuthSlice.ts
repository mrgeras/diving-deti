// import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Admin, AuthState } from '../../Features/Admin/type';
import * as api from '../../Features/Admin/api';

const initialState: AuthState = {
  admin: undefined,
  error: undefined,
};

export const authorization = createAsyncThunk(
  'auth/authorization',
  (value: Admin) => api.default(value)
);

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(authorization.fulfilled, (state, action) => {
        state.admin = action.payload;
      })
      .addCase(authorization.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default AuthSlice;
