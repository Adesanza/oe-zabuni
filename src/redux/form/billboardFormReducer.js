import {
    createSlice
} from "@reduxjs/toolkit";
import { getRegionState, getStateLga, getLgaCity } from "../../utils/form/compute-state-data";

const init = {
    isEditing: false,
    formData: {
        name: '',
        location: '',
        type: '',
        height_m: '',
        width_m: '',
        height_px: '',
        width_px: '',
        status: '',
        category: '',
        class: '',
        region: '',
        state: '',
        coordinate: '',
        lga: '',
        city: '',
        amount: '',
        face: '',
        slot: '',
        unit: ''
    },
    currentRegion: '',
    currentState: '',
    stateData: [],
    lgaData: [],
    cityData: []
    
}

const billboardFormReducer = createSlice({
    name: 'billboardForm',
    initialState: init,
    reducers: {
        editBillboardData: (state, action) => {
            state.isEditing = true;
            state.formData = {
                ...action.payload
            }
            // state.lgaData = [...getStateLga(action.payload.state)]
        },
        showStateData: (state, action) => {
            state.currentRegion = action.payload;
            state.stateData = [...getRegionState(action.payload)];
        },
        showLgaData: (state, action) => {
            state.currentState = action.payload;
            state.lgaData = [...getStateLga(action.payload,state.currentRegion)]
        },
        showCityData: (state, action) => {
            state.cityData = [...getLgaCity({region: state.currentRegion, state: state.currentState, lga: action.payload})];
        },
        resetBillboardFormData: (state, action) => init
    }
})

export const {
    editBillboardData,
    showStateData,
    showLgaData,
    showCityData,
    resetBillboardFormData
} = billboardFormReducer.actions;

export default billboardFormReducer.reducer;