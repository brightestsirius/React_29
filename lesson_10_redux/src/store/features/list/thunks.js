import { createAsyncThunk } from "@reduxjs/toolkit";

import service from "./../../../services/list";

const fetchList = createAsyncThunk("list/fetchList", async () => {
  const response = await service.get();
  return response;
});

const fetchListItemCompleted = createAsyncThunk(
  "list/fetchListItemCompleted",
  async (item, thunkAPI) => {
    await service.put(item.id, {
      ...item,
      completed: !item.completed,
    });

    thunkAPI.dispatch(fetchList());
  }
);

export { fetchList, fetchListItemCompleted };
