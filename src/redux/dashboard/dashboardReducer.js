import { createSlice } from "@reduxjs/toolkit";

const dashboardReducer = createSlice({
    name: 'dashboard',
    initialState: {
        management: {active: false, child: null},
        marketing: {active: false, child: null},
        technical: {active: false, child: null},
        operations: {active: false, child: null},
        finance: {active: false, child: null}
    },
    reducers: {
        managementDashboard: (state, action) => state = {...state, management: {active: true, child: action.payload}},
        marketingDashboard: (state, action) => state.marketing = action.payload, 
        technicalDashboard: (state, action) => state.technical = action.payload, 
        operationsDashboard: (state, action) => state.operations = action.payload, 
        financeDashboard: (state, action) => state.finance = action.payload, 
    }
})

export const { managementDashboard,marketingDashboard,technicalDashboard,operationsDashboard,financeDashboard }  = dashboardReducer.actions;

export default dashboardReducer.reducer;