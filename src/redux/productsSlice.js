import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// fetch all data
export const getData = createAsyncThunk("products/getData", async (_, thunkAPI) => {
    try {
        const res = await axios.get("https://fakestoreapi.com/products")
        const data = res.data
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

// fetch one item
export const getItem = createAsyncThunk("products/getItem", async (id, thunkAPI) => {
    try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        const data = res.data
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})


const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        item: [],
        loading: false,
        error: null,
    },
    reducers: {
        // clearItem: (state) => {
        //     state.item = null;
        // }
    },
    extraReducers: (builder) => {
        // all products
        builder.addCase(getData.pending, (state, action) => {
            state.loading = true
            state.error = null;
        })
        builder.addCase(getData.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        builder.addCase(getData.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        // one item
        builder.addCase(getItem.pending, (state, action) => {
            state.loading = true
            state.error = null;
        })
        builder.addCase(getItem.fulfilled, (state, action) => {
            state.loading = false
            state.item = action.payload
        })
        builder.addCase(getItem.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

// export const { clearItem } = productsSlice.actions
export default productsSlice.reducer