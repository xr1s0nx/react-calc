import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toValue: 0,
    fromValue: '',
    load: false,
    currentRate: 0,
    allRatesNames: [],
    currentFromRate: 'USD',
    currentToRate: 'RUB',
    fromVisible: false,
    toVisible: false,
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
        },
        changeVisibleFrom: (state, action) => {
            debugger
            state.fromVisible = action.payload;
        },
        changeVisibleTo: (state, action) => {
            debugger
            state.toVisible = action.payload;
        }

    }
})


export const {changeVisibleTo, switchRates, setCurrentFromRate, setCurrentToRate, setRatesNames, setCurrentRate, changeValues, toggleLoad, changeVisibleFrom } = ConverterSlice.actions;

export default ConverterSlice.reducer;
