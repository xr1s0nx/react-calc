import { configureStore } from '@reduxjs/toolkit'
import ConverterSlice from './ConverterSlice'

export const store = configureStore({
    reducer: {
        Converter: ConverterSlice
    },
})