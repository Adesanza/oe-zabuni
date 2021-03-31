import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../utils/user/user-api";

export const fetchUserOnLogin = createAsyncThunk(
    "userState/fetchByLoginStatus",
    async (logingObject) => {
        const response = await userApi.logUserIn(logingObject);
        return response;
    }
)
export const fetchUserOnRegister = createAsyncThunk(
    "userState/fetchByRegisterStatus",
    async (registerObject) => {
        // const response = await userApi.registerUser(registerObject);
        // return response;
    }
)

const userReducer = createSlice({
    name: 'userState',
    initialState: null,
    reducers: {
        logUserOut: state => state = null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserOnLogin.fulfilled, (state, { payload }) => payload.data)
        builder.addCase(fetchUserOnLogin.rejected, (state,action) => {state = null})
        
    }
})

export const { logUserOut }  = userReducer.actions;
export default userReducer.reducer;

// builder.addCase(fetchUserOnRegister.fulfilled, (state, { payload }) => {state.userState = {...payload}})
// builder.addCase(fetchUserOnRegister.rejected, (state,action) => {state.userState = null})