import {configureStore} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

/* Reducerlar Component Klasörlerinin İçinde veya reducers klasöründe */
import auth from '../../components/features/Auth/auth.reducer'
import reduxThunkMiddleware from '../utils/redux-thunk.middleware'

const store = configureStore({
    reducer: {
        auth,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(reduxThunkMiddleware),
})

export type AppDispatch = typeof store.dispatch
export type IRootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default store
