import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
});

console.log(store.getState());