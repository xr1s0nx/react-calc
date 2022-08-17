import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toValue: 0,
    fromValue: 0,
    load: false,
    currentRate: 0,
    allRatesNames: [],
    currentFromRate: 'USD',
    currentToRate: 'RUB'
}

export const ConverterSlice = createSlice({
    name: 'Converter',
    initialState,
    reducers: {
        changeValues: (state, action) => {
            if (action.payload.length + 1 <= 11) {
                state.fromValue = action.payload;
                state.toValue = action.payload * state.currentRate;
            }
            if (action.payload === '') {
                state.fromValue = 0;
            }
        },
        toggleLoad: (state, action) => {
            state.load = action.payload
        },
        setCurrentRate: (state, action) => {
            state.currentRate = action.payload;
            state.toValue = state.fromValue * action.payload
        },
        setRatesNames: (state, action) => {
            state.allRatesNames = action.payload
        },
        setCurrentToRate: (state, action) => {
            state.currentToRate = action.payload;
        },
        setCurrentFromRate: (state, action) => {
            state.currentFromRate = action.payload
        },
        switchRates: (state) => {
            let oldFrom = state.currentFromRate;
            let oldTo = state.currentToRate;
            state.currentFromRate = oldTo;
            state.currentToRate = oldFrom;
        }

    }
})


export const { switchRates, setCurrentFromRate, setCurrentToRate, setRatesNames, setCurrentRate, changeValues, toggleLoad } = ConverterSlice.actions;

export default ConverterSlice.reducer;
