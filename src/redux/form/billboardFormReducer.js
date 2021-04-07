import {
    createSlice
} from "@reduxjs/toolkit";

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
    }
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
        },
        resetBillboardFormData: (state, action) => init
    }
})

export const {
    editBillboardData,
    resetBillboardFormData
} = billboardFormReducer.actions;

export default billboardFormReducer.reducer;