import { configureStore } from '@reduxjs/toolkit';

const preLoadedState = {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
};

export const store = configureStore({
    reducer:{
        // reducers
    },
    preLoadedState,    
});

console.log(store.getState());