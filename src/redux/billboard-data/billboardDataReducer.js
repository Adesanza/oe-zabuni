import { createSlice } from "@reduxjs/toolkit";
import { billboardData } from "./billboard-data";

const billboardDataReducer = createSlice({
    name: 'billboardData',
    initialState: billboardData,
    reducers: {
        createBillboard: (state,action) => {state.push(action.payload)},
        editBillboard: (state,action) => state.map(billboard => {
            if(billboard.id === action.payload.id){
                billboard = {...action.payload}
            }
            return billboard;
        }),
        deleteBillboard: (state,action) => state.filter(billboard => billboard.id !== action.payload)
    }
})

export const { createBillboard, deleteBillboard, editBillboard }  = billboardDataReducer.actions;

export default billboardDataReducer.reducer;