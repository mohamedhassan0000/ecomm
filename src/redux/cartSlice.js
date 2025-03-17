import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { item: [] },
    reducers: {
        addToCart: (state, action) => {
            state.item.push({ ...action.payload, quantity: 1 });
        },
        increase: (state, action) => {
            const findProduct = state.item.find((i) => i.id === action.payload.id);
            if (findProduct && findProduct.quantity < 50) {
                findProduct.quantity += 1;
            }
        },
        decrease: (state, action) => {
            const findProduct = state.item.find((i) => i.id === action.payload.id);
            if (findProduct && findProduct.quantity > 1) {
                findProduct.quantity -= 1;
            }
        },
        deleteItem: (state, action) => {
            state.item = state.item.filter((i) => i.id !== action.payload);
        },
        clearCart: (state) => {
            state.item = [];
        }
    }
});

export const { addToCart, increase, decrease, deleteItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
