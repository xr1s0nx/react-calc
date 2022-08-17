import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toValue: 0,
    fromValue: 0,
}

export const ConverterSlice = createSlice({
    name: 'Converter',
    initialState,
    reducers: {
        changeFromValue: (state, action) => {
            if (action.payload.length + 1 <= 11) {
                state.fromValue = action.payload;

            }
        },
        changeToValue: (state, action) => {
            state.toValue = Math.round(action.payload);
        }
    }
})


export const { changeFromValue, changeToValue } = ConverterSlice.actions;

export default ConverterSlice.reducer;
