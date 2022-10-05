import {configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

/* Reducerlar Component Klasörlerinin İçinde veya reducers klasöründe */
import auth from '../../components/features/Auth/auth.reducer'
import role from '../../components/features/AuthSettings/Role/role.reducer'
import reduxThunkMiddleware from '../utils/redux-thunk.middleware'

const store = configureStore({
    reducer: {
        auth,
        role
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(reduxThunkMiddleware),
})

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store