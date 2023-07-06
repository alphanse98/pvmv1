import { configureStore } from "@reduxjs/toolkit";
import slices from "./Slice"

export const store = configureStore({
  reducer: {
    fromActiveStore : slices
  },
});
