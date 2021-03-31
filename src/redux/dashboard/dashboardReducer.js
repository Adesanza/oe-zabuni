import { createSlice } from "@reduxjs/toolkit";

const dashboardReducer = createSlice({
    name: 'dashboard',
    initialState: "management",
    reducers: {
        dashboardContent: (state, action) => action.payload 
    }
})

export const { dashboardContent }  = dashboardReducer.actions;

export default dashboardReducer.reducer;