import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSlicePubgThunk = createAsyncThunk('pubg/get', async () => {
    const res = await axios.get('http://localhost:5000/api/Pubg');
    return res.data;
});

const pubgSlice = createSlice({
    name: 'pubg',
    initialState: {
        loading: false,
        products: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSlicePubgThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getSlicePubgThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSlicePubgThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const pubgReducer = pubgSlice.reducer;

