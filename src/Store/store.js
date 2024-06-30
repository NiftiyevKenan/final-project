import { configureStore } from "@reduxjs/toolkit";
import { pubgReducer } from "./Reducers/getSlice";
import authSlice from "./Reducers/authSlice";
import { apiSlice } from "./Reducers/apiSlice";

const store = configureStore({
    reducer: {
        pubgReducer,
        auth: authSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export  {store}