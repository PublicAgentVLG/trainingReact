import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UiState {
  customerFilter: string,
  sumOrder:string
}

const initialState: UiState = { customerFilter: '', sumOrder:''}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // Внутри slice работает Immer — можно писать "мутабельно"
    setCustomerFilter: (state, action: PayloadAction<string>) => {
      state.customerFilter = action.payload
    },
    clearCustomerFilter: (state) => {
      state.customerFilter = ''
    },
    setOrderSum: (state, action: PayloadAction<string>) => {
      state.sumOrder = action.payload
    },
    clearOrderSum: (state) => {
      state.sumOrder = ''
    },
  },
})

export const { setCustomerFilter, clearCustomerFilter,setOrderSum,clearOrderSum } = uiSlice.actions
export default uiSlice.reducer
