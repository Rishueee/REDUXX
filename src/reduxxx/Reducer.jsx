import { createSlice } from "@reduxjs/toolkit";

const CreateSlice = createSlice({
    name: 'incdec',
    initialState: 0,
    reducers: {
        inc: (state) => state + 1,
        dec: (state) => (state > 0 ? state - 1 : state),
    },
});

export const { inc, dec } = CreateSlice.actions;
export const counterReducer = CreateSlice.reducer;
export const Selector = (state) => state.counterReducer;
