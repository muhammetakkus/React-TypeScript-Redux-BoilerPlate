import {createSlice, createAsyncThunk, isPending, isFulfilled, isRejected} from '@reduxjs/toolkit'
import AuthService from '../../../shared/services/auth.service'
import { UserModel } from '../../../shared/models/user.model';

/* Actions */
export const logout = createAsyncThunk('auth/logout', () => {
    localStorage.removeItem("user")
});

export const login = createAsyncThunk(
    'auth/login',
    async (data: UserModel, thunkAPI) => {
        // thunkAPI.dispatch(getEntities({}));
        return await AuthService.login(data).catch(error => thunkAPI.rejectWithValue(error?.response?.data || error))
    }
  )

/* */
const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        isAuth: localStorage.getItem("user") ? true : false,
        user: localStorage.getItem("user") ? localStorage.getItem("user") : {},
        token: localStorage.getItem("token") ? localStorage.getItem("token") : false,
        authLoading: false,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, state => {
            state.loading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = true;
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = true;
        })
        .addMatcher(isFulfilled(login), (state, action) => {
            console.log('fulfilled');
            state.loading = false;
        })
        .addMatcher(isPending(login), (state, action) => {
            console.log('pending');
            state.loading = false;
        })
        .addMatcher(isRejected(login), (state, action) => {
            console.log('rejected');
            state.loading = false;
        })
      },
});

export const authActions = authSlice.actions
export default authSlice.reducer