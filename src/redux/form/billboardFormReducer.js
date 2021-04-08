import {
    createSlice
} from "@reduxjs/toolkit";
import { getStateLga } from "../../utils/form/state-lga";

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
    lgaData: []
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
            state.lgaData = [...getStateLga(action.payload.state)]
        },
        showLgaData: (state, action) => {
            state.lgaData = [...getStateLga(action.payload)]
        },
        resetBillboardFormData: (state, action) => init
    }
})

export const {
    editBillboardData,
    showLgaData,
    resetBillboardFormData
} = billboardFormReducer.actions;

export default billboardFormReducer.reducer;