import { createSlice } from "@reduxjs/toolkit";

const dashboardReducer = createSlice({
    name: 'dashboard',
    initialState: "inventory",
    reducers: {
        dashboardContent: (state, action) => action.payload 
    }
})

export const { dashboardContent }  = dashboardReducer.actions;

export default dashboardReducer.reducer;