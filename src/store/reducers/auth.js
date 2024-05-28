import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { saveObject, saveValue } from '../../utils/storage'
import URLS from '../../constants/url';
import APP_CONSTANTS from '../../constants/app-constant';

const requestHeaders = {
    'Content-Type': 'application/json'
};

export const login = createAsyncThunk('Auth/login', async (body) => {
    const response = await fetch(URLS.AUTH.LOGIN, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(body)
    });
    const data = await response.json();
    return data;
});

const initialState = {
    isLoggedIn: false,
    authToken: {},
    authorities: []
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setAuthToken: (state, action) => {
            state.authToken = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, () => {})
            .addCase(login.fulfilled, (state, { payload }) => {
                saveObject(APP_CONSTANTS.TOKEN, payload);
                saveValue(APP_CONSTANTS.IS_LOGGED_IN, true);
                state.authToken = payload;
                state.isLoggedIn = true;
                state.authorities = payload.authorities;
            })
            .addCase(login.rejected, (state) => {
                state.isLoggedIn = false;
            });
    }
});

//export const getRole = (state) => state.auth.user.role ;
export const isUserLoggedIn = (state) => state.auth.isLoggedIn;
export const authToken = (state) => state.auth.authToken;
export const { setIsLoggedIn, setAuthToken } = authSlice.actions;
export default authSlice.reducer;
