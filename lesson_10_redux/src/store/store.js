import { configureStore } from "@reduxjs/toolkit";

import listReducer from "./features/list/slice";

export const store = configureStore({
  reducer: { listReducer },
});
