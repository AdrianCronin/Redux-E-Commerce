import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        cart: [],
    },
    {
        cartOpen: false,
    },
];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cartOpen = true;
            state.cart.push(action.payload);
        },
        addMultipleToCart(state, action) {
            state.cartOpen = true;
            for (let item of action.payload) {
                state.cart.push(item);
            };
        },
        updateCartQuantity(state, action) {
            state.cartOpen = true;
            state.cart.map((product) => {
                if (action._id === product._id) {
                    product.purchaseQuantity = action.purchaseQuantity;
                }
                return product;
            });
        },
        removeFromCart(state, action) {

        },
        clearCartQuantity(state, action) {

        },
        toggleCart(state, action) {

        },
    },
});