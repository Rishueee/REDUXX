import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducer";

export const checkstore = configureStore({
    reducer:{
        counterReducer
    }
})