// import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './Reducers/AddToCart'
import UserReducer from './Reducers/UserReducer'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: UserReducer
    }
})

export default store;