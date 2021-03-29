import { createSlice } from "@reduxjs/toolkit";

const dashboardReducer = createSlice({
    name: 'management',
    initialState: "inventory",
    reducers: {
        dashboardContent: (state, action) => action.payload 
    }
})

export const { dashboardContent }  = dashboardReducer.actions;

export default dashboardReducer.reducer;