import { createSlice } from "@reduxjs/toolkit";

// const [fromActive, setFromActive] = useState(false);

export let slices = createSlice({
  name: "fromActive",

  initialState: {
    fromActive: false,
  },

  reducers: {
    fromActiveAction: (state, action) => {
      state.fromActive = action.payload;
    },
  },
});

export const { fromActiveAction } = slices.actions;
export default slices.reducer;
