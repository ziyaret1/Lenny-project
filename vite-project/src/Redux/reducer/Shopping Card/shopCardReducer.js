import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  cart: [], 
  loading: false,
}

export const shopCardReducer = createSlice({
  name: 'shopCard',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((x) => x.productId !== action.payload)
    },
    
  },
})

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity} = shopCardReducer.actions

export default shopCardReducer.reducer