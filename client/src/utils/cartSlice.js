import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    cartOpen: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCartReducer(state, action) {
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
                if (action.payload._id === product._id) {
                    product.purchaseQuantity = action.payload.purchaseQuantity;
                }
                return product;
            });
        },
        removeFromCartReducer(state, action) {
            state.cart = state.cart.filter((product) => {
                return product._id !== action.payload._id;
            });
            state.cartOpen = state.cart.length > 0;
        },
        clearCartQuantity(state) {
            state = initialState;
        },
        toggleCartRedux(state) {
            state.cartOpen = !state.cartOpen;
        },
    },
});

export const { addToCartReducer, addMultipleToCart, updateCartQuantity, removeFromCartReducer, clearCartQuantity, toggleCartRedux } = cartSlice.actions;
export default cartSlice.reducer;