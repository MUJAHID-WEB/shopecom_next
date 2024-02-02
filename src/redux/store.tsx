import { configureStore } from '@reduxjs/toolkit'
import { shopecomslice } from './shopecomSlice'


export const shopecomReducer = shopecomslice.reducer;



export const store = configureStore({
  reducer: {
    shopecom: shopecomReducer 
  },
})

