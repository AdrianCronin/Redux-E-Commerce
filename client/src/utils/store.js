import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import categorySlice from './categorySlice';
import cartSlice from './cartSlice';

export const store = configureStore({
    reducer: {
        products: productSlice,
        category: categorySlice,
        cart: cartSlice,
    },
});