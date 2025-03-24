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
        allProducts: [],
        allCats: [],
        item: [],
        loading: false,
        error: null,
    },
    reducers: {
        filterByCategory: (state, action) => {
            if (action.payload === "All") {
                state.products = state.allProducts
            } else {
                state.products = state.allProducts.filter((i) => i.category === action.payload);
            }
        }
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
            state.allProducts = action.payload
            state.allCats = ["All", ...new Set(action.payload.map((i) => i.category))]
            console.log(state.allCats);

            // state.allCats = ["All", ...new Set(state.allCats.map((i) => i.category))]
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

export const { filterByCategory } = productsSlice.actions
export default productsSlice.reducer