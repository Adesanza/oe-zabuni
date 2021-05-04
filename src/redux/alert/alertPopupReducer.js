import { createSlice } from '@reduxjs/toolkit';

const alertPopupReducer = createSlice({
  name: 'alertContent',
  initialState: null,
  reducers: {
    resetAlertContent: (state) => {
      state = null;
    },
    setAlertContent: (state, action) => action.payload,
  },
});

export const { resetAlertContent, setAlertContent } = alertPopupReducer.actions;

export default alertPopupReducer.reducer;
