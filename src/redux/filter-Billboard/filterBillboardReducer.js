import { createSlice } from '@reduxjs/toolkit';

const filterBillboardReducer = createSlice({
  name: 'filterBillboard',
  initialState: { type: 'all', keyword: '' },
  reducers: {
    filterBillboardData: (state, action) => {
      state.type = action.payload.type;
      state.keyword = action.payload.keyword;
    },
  },
});

export const { filterBillboardData } = filterBillboardReducer.actions;

export default filterBillboardReducer.reducer;
