import { createSlice } from "@reduxjs/toolkit";

export let DetailsDataSlice = createSlice({
    name: "objData",

    initialState: {
        objData:{},
    },

    reducers: {
        detailAction: (state, action) => {
          state.objData = action.payload;
        },
    },
})

export const { detailAction } = DetailsDataSlice.actions;
export default DetailsDataSlice.reducer;