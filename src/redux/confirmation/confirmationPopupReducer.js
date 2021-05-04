import { createSlice } from '@reduxjs/toolkit';

const confirmationPopupReducer = createSlice({
  name: 'confirmationAction',
  initialState: { type: null, id: null },
  reducers: {
    resetConfirmationAction: (state) => {
      state.type = null;
      state.id = null;
    },
    setConfirmationAction: (state, action) => {
      state.type = action.payload.type;
      state.id = action.payload.id;
    },
  },
});

export const {
  resetConfirmationAction,
  setConfirmationAction,
} = confirmationPopupReducer.actions;

export default confirmationPopupReducer.reducer;
