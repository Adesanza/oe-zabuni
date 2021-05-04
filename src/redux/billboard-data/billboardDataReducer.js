import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import billboardDataApi from '../../utils/billboard-table/billboard-api';

export const fetchAllBillboards = createAsyncThunk(
  'billboardState/fetchByGetAllStatus',
  async () => {
    const response = await billboardDataApi.get();
    return response;
  }
);
export const createABillboard = createAsyncThunk(
  'billboardState/fetchByCreateStatus',
  async (billboardData) => {
    const response = await billboardDataApi.create(billboardData);
    return response;
  }
);
export const editABillboard = createAsyncThunk(
  'billboardState/fetchByUpdateStatus',
  async (billboardData) => {
    const response = await billboardDataApi.edit(billboardData);
    return response;
  }
);
export const deleteABillboard = createAsyncThunk(
  'billboardState/fetchByDeleteStatus',
  async (billboardId) => {
    const response = await billboardDataApi.delete(billboardId);
    return response;
  }
);

const billboardDataReducer = createSlice({
  name: 'billboardData',
  initialState: [],
  reducers: {
    createBillboard: (state, action) => {
      state.push(action.payload);
    },
    editBillboard: (state, action) =>
      state.map((billboard) => {
        if (billboard.id === action.payload.id) {
          billboard = { ...action.payload };
        }
        return billboard;
      }),
    deleteBillboard: (state, action) =>
      state.filter((billboard) => billboard.id !== action.payload),
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllBillboards.fulfilled,
      (state, { payload }) => payload.billboardData
    );
    builder.addCase(fetchAllBillboards.rejected, (state, action) => {
      state = [];
    });
    builder.addCase(createABillboard.fulfilled, (state, { payload }) => {
      state.push(payload.billboardData);
    });
    builder.addCase(editABillboard.fulfilled, (state, { payload }) => {
      const idx = state.findIndex(
        (billboard) => billboard._id === payload.billboardData._id
      );
      if (idx >= 0) state.splice(idx, 1, payload.billboardData);
    });
    builder.addCase(deleteABillboard.fulfilled, (state, { payload }) => {
      const idx = state.findIndex(
        (billboard) => billboard._id === payload.billboardData._id
      );
      if (idx >= 0) state.splice(idx, 1);
    });
  },
});

export const {
  createBillboard,
  deleteBillboard,
  editBillboard,
} = billboardDataReducer.actions;

export default billboardDataReducer.reducer;
