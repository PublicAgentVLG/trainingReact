import { configureStore } from '@reduxjs/toolkit'
import { ordersApi } from './ordersApi'
import uiReducer from './uiSlice'

export const store = configureStore({
  reducer: {
    [ordersApi.reducerPath]: ordersApi.reducer, // кэш серверных данных
    ui: uiReducer,                               // наше UI-состояние
  },
  middleware: (getDefault) => getDefault().concat(ordersApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
