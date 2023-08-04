import { configureStore } from "@reduxjs/toolkit";
import slices from "./Slice"
import shareFormSlice from "./shareFormSlice";
import DetailsDataSlice from "./DetailsDataSlice";

export const store = configureStore({
  reducer: {
    fromActiveStore : slices,
    shareFormSlice : shareFormSlice,
    DetailsDataSlice : DetailsDataSlice,
  },
});

