import { createSlice } from '@reduxjs/toolkit';

const verticalModalReducer = createSlice({
  name: 'showModalContent',
  initialState: { show: false, type: null },
  reducers: {
    closeVerticalModalDisplay: (state) => {
      state.show = false;
    },
    verticalModalContent: (state, action) => {
      state.show = true;
      state.type = action.payload;
    },
  },
});

export const {
  verticalModalContent,
  closeVerticalModalDisplay,
} = verticalModalReducer.actions;

export default verticalModalReducer.reducer;
