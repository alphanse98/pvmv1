import { createSlice } from "@reduxjs/toolkit";

export let shareFormSlice = createSlice({
    name: "formActive",

    initialState: {
        formActive:{formActive: true,url:"alphanse"},
    },

    reducers: {
        shareFormAction: (state, action) => {
          state.formActive = action.payload;
        },
    },
})

export const { shareFormAction } = shareFormSlice.actions;
export default shareFormSlice.reducer;