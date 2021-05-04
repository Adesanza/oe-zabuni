import { createSlice } from '@reduxjs/toolkit';

const overheadModalReducer = createSlice({
  name: 'showModalContent',
  initialState: { show: false, type: null },
  reducers: {
    closeOverheadModalDisplay: (state) => {
      state.show = false;
    },
    overheadModalContainer: (state, action) => {
      state.show = true;
      state.type = action.payload;
    },
  },
});

export const {
  overheadModalContainer,
  closeOverheadModalDisplay,
} = overheadModalReducer.actions;

export default overheadModalReducer.reducer;
