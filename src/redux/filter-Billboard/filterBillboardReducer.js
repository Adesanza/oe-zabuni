import { createSlice } from "@reduxjs/toolkit";

const filterBillboardReducer = createSlice({
    name: 'filterBillboard',
    initialState: {keyword: ''},
    reducers: {
        filterBillboardData: (state, action) => {state.keyword = action.payload }
    }
})

export const { filterBillboardData }  = filterBillboardReducer.actions;

export default filterBillboardReducer.reducer;