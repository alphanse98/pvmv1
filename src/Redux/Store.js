import { configureStore } from "@reduxjs/toolkit";
import slices from "./Slice"
import shareFormSlice from "./shareFormSlice";

export const store = configureStore({
  reducer: {
    fromActiveStore : slices,
    shareFormSlice : shareFormSlice,
  },
});

