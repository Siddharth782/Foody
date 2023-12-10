import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './reduxSlices/basketSlice'

export const store = configureStore({
    // Connected all the slices to the global store 
    reducer: {
        basket: basketSlice,
    },
})