import {createSlice, createAsyncThunk, isPending, isFulfilled, isRejected} from '@reduxjs/toolkit'
import { RoleModel } from '../../../../shared/models/role.model';
import RoleService from '../../../../shared/services/role.service';

export const createItem = createAsyncThunk(
    'role/create',
    async (data: RoleModel, thunkAPI) => {
        const options = {} // { headers: { "Content-Type": "multipart/form-data" } }
        return await RoleService.create(data, options).catch(error => thunkAPI.rejectWithValue(error?.response?.data || error))
    }
  )

export const getItems = createAsyncThunk(
    'role/get',
    async (data: RoleModel, thunkAPI) => {
        return await RoleService.getAll().catch(error => thunkAPI.rejectWithValue(error?.response?.data || error))
    }
  )

const roleSlice = createSlice({
    name: "roleSlice",
    initialState: {
        items: [],
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createItem.fulfilled, (state, action) => {
            state.loading = true;
        })
        .addMatcher(isPending(createItem, getItems), (state, action) => {
            console.log('pending');
            state.loading = true;
        })
        .addMatcher(isRejected(createItem, getItems), (state, action) => {
            state.loading = false;
        })
    }
})

export const roleActions = roleSlice.actions
export default roleSlice.reducer