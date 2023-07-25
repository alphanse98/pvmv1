import { createSlice } from "@reduxjs/toolkit";

export let shareFormSlice = createSlice({
    name: "shareForm",

    initialState: {
        formActive: true,
        url: "",
    },

    reducers: {
        shareFormAction: (state, action) => {
          state.fromActive = action.payload;
        },
    },
})

export const { shareFormAction } = shareFormSlice.actions;
export default shareFormSlice.reducer;