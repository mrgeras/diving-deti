import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../Features/Articles/api';
import { ArticlesState } from '../../Features/Articles/types/ArticlesState';
import {
  ArticleId,
  ArticleWithOutId,
} from '../../Features/Articles/types/ArticlesType';

const initialState: ArticlesState = { articles: [], error: '' };

export const articlesInit = createAsyncThunk('articles/init', () =>
  api.getArticles()
);

export const addArticle = createAsyncThunk(
  'articles/add',
  (article: ArticleWithOutId) => api.addArticleFetch(article)
);

export const deleteArticle = createAsyncThunk(
  'articles/delete',
  (value: ArticleId) => api.deleteArticleFetch(value)
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(articlesInit.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.error = '';
      })
      .addCase(articlesInit.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addArticle.fulfilled, (state, action) => {
        state.articles.push(action.payload);
      })
      .addCase(addArticle.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.articles = state.articles.filter(
          (article) => article.id !== +action.payload
        );
      })
      .addCase(deleteArticle.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default articlesSlice.reducer;
