import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    cartData: [],

}

const cartReducer = createSlice({
    name: 'cart',
    initialState: {
        initialState
    },
    reducers: {
        addCart: (state, {payload})=>{
            state.initialState = payload;
        }
    }
});

export default cartReducer.reducer ;


export const {addCart} = cartReducer.actions;