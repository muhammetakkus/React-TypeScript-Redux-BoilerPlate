import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import ProjectService from '../../services/ProjectService'

const url = process.env.REACT_APP_ENV === "dev" ? process.env.REACT_APP_API_LOCAL_BASE_URL : process.env.REACT_APP_API_PROD_BASE_URL

/* Actions */
export const create = createAsyncThunk('project/create', (data, thunkAPI) => {

    const validation = ["name", "category", "exchange"]
    validation.forEach(field => {
        if(data[field] === "") {
            const message = `${field} field is required`
            throw thunkAPI.dispatch(openNotify({isOpen: true, title: "Warning!", message: message.charAt(0).toUpperCase() + message.slice(1), type:"warning"}))
        }
    })

    /*
    dummy data
    data["category"] = "62d5a8937ec2905e3b3a0df9"
    data["exchange"] = "62d5a8937ec2905e3b3a0df9"
    */

    return ProjectService.create(data)
            // burası reduxToolKit Thunk'a serverdan dönen error objsini geçiyor aksi halde error data alınamıyor
            .catch(error => thunkAPI.rejectWithValue(error?.response?.data || error))
});
export const update = createAsyncThunk('project/update', (data, thunkAPI) => {
    console.log(data)
    const validation = ["name", "category", "exchange"]
    validation.forEach(field => {
        if(data[field] === "") {
            const message = `${field} field is required`
            throw thunkAPI.dispatch(openNotify({isOpen: true, title: "Warning!", message: message.charAt(0).toUpperCase() + message.slice(1), type:"warning"}))
        }
    })
    
    return ProjectService.update(data).catch(error => thunkAPI.rejectWithValue(error?.response?.data || error))
});
export const get = createAsyncThunk('project/get', (data, thunkAPI) => {
    return ProjectService.get(data).catch(error => thunkAPI.rejectWithValue(error?.response?.data || error))
});
export const getAll = createAsyncThunk('project/getAll', (data, thunkAPI) => {
    return ProjectService.getAll(data).catch(error => thunkAPI.rejectWithValue(error?.response?.data || error))
});
export const getWhere = createAsyncThunk('project/getWhere', (data, thunkAPI) => {
    // console.log(data)
    return ProjectService.getWhere(data).catch(error => thunkAPI.rejectWithValue(error?.response?.data || error))
});

export const deleteIt = createAsyncThunk('project/delete', (data, thunkAPI) => {
    return ProjectService.delete(data).catch(error => thunkAPI.rejectWithValue(error?.response?.data || error))
});


/* RxJs */
export const getWithRxJS = (data) => {
    const data$ = fromFetch(`${url}project/get/where?where={"status":"${data.where.status}"}&page=${data.page}`)
    .pipe(
        switchMap((response) => response.json())
    );
    
    return {
        type: 'projectSlice/getWithRxJS',
        payload: data$ 
    };
};


/* RxJs */
/* export const getAllObservable = new BehaviorSubject()
fetch(`${url}project`)
    .then((res) => res.json())
    .then((data) => getAllObservable.next(data));*/

/* */
const projectSlice = createSlice({
    name: 'projectSlice',
    initialState: {
        projects: [],
        newData: [],
        loading: false,
        loadingForDelete: false,
    },
    reducers: {},
    extraReducers: {
 
    }
})

export const projectActions = projectSlice.actions // import adminActions from 'this file' && dispatch(adminActions.login())
export default projectSlice