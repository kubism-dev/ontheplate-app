import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchRecipes,
  fetchBookmarks,
  saveBookmarks,
  removeBookmarks,
} from './recipesService';
import json from './v2.json';

const initialState = {
  recipes: json.hits,
  bookmarks: null,
  count: 0,
  status: 'idle',
  message: '',
};

export const getRecipes = createAsyncThunk(
  'recipes/getRecipes',
  async (thunkAPI) => {
    try {
      return await fetchRecipes();
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const setBookmarks = createAsyncThunk(
  'recipes/setBookmarks',
  async (name, thunkAPI) => {
    try {
      return await saveBookmarks(name.name, name.url);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteBookmarks = createAsyncThunk(
  'recipes/deleteBookmarks',
  async (name, thunkAPI) => {
    try {
      return await removeBookmarks(name);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getBookmarks = createAsyncThunk(
  'recipes/getBookmarks',
  async (thunkAPI) => {
    try {
      return await fetchBookmarks();
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.status = 'done';
        state.recipes = action.payload.hits;
      })
      .addCase(getBookmarks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBookmarks.fulfilled, (state, action) => {
        state.status = 'done';
        state.bookmarks = action.payload;
        state.count = JSON.parse(action.payload).length;
      })
      .addCase(setBookmarks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(setBookmarks.fulfilled, (state, action) => {
        state.status = 'done';
        state.count = state.count + 1;
        state.bookmarks = action.payload;
      })
      .addCase(deleteBookmarks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteBookmarks.fulfilled, (state, action) => {
        state.status = 'done';
        state.count = state.count - 1;
        state.bookmarks = action.payload;
      });
  },
});

//export const { incrementAsync } = counterSlice.actions;

export default recipesSlice.reducer;
