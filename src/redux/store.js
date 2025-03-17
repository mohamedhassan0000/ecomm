import { configureStore } from "@reduxjs/toolkit";
import products from "./productsSlice"
import item from "./cartSlice"


export const store = configureStore({
    reducer: {
        products,
        item
    }
})