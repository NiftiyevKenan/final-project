import { configureStore } from "@reduxjs/toolkit";
import  { mobilLegendReducer, pubgReducer } from "./Reducers/getSlice";

export const store = configureStore({
    reducer: {
        pubgReducer,
        mobilLegendReducer
    }
})