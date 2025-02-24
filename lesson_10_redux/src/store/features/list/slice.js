import { createSlice } from "@reduxjs/toolkit";
import {fetchList} from './thunks'

const initialState = {
  list: [],
  isLoading: false,
  isError: false,
  listColor: `crimson`
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchList.fulfilled, (state, {payload}) => {
        state.list = payload;
        state.isLoading = false;
      })
      .addCase(fetchList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchList.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
  },
});

export const { setList } = listSlice.actions;

export default listSlice.reducer;
