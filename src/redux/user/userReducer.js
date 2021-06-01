import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../utils/user/user-api';

export const fetchUserOnLogin = createAsyncThunk(
  'userState/fetchByLoginStatus',
  async (logingObject) => {
    const response = await userApi.logUserIn(logingObject);
    return response;
  }
);
export const fetchUserOnRegister = createAsyncThunk(
  'userState/fetchByRegisterStatus',
  async (registerObject) => {
    const response = await userApi.registerUser(registerObject);
    return response;
  }
);

const userReducer = createSlice({
  name: 'userState',
  initialState:
    JSON.parse(window.sessionStorage.getItem('zabuni_user')) || null,
  reducers: {
    logUserOut: (state) => (state = null),
    setUserData: (state, { payload }) =>
      (state = payload ? { ...state, ...payload } : payload),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserOnLogin.fulfilled, (state, { payload }) => {
      window.sessionStorage.setItem(
        'zabuni_user',
        JSON.stringify(payload.publisher)
      );
      return payload.publisher;
    });
    builder.addCase(fetchUserOnLogin.rejected, (state, action) => {
      state = null;
    });
    builder.addCase(fetchUserOnRegister.fulfilled, (state, { payload }) => {
      window.sessionStorage.setItem(
        'zabuni_user',
        JSON.stringify(payload.publisher)
      );
      return payload.publisher;
    });
    builder.addCase(fetchUserOnRegister.rejected, (state, action) => {
      state = null;
    });
  },
});

export const { logUserOut, setUserData } = userReducer.actions;
export default userReducer.reducer;

// builder.addCase(fetchUserOnRegister.fulfilled, (state, { payload }) => {state.userState = {...payload}})
// builder.addCase(fetchUserOnRegister.rejected, (state,action) => {state.userState = null})
