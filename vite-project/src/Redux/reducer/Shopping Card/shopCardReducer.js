import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  cart: [], 
  loading: false,
  checkedProduct: []
}

export const shopCardReducer = createSlice({
  name: 'shopCard',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {productId, productPrice, quantityProduct} = action.payload
      const currentProduct = state.cart.find(item => item.productId === productId)
      if(currentProduct){
        currentProduct.productPrice += productPrice
        currentProduct.quantityProduct += quantityProduct
      }
      else{
        state.cart.push(action.payload);
        // state.checkedProduct.push(action.payload)
        // console.log(state.checkedProduct, 'ooolll');
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((x) => x.productId !== action.payload)
    },
    incrementProduct: (state, action) => {
      const {productId} = action.payload
      const selectProduct = state.cart.find(item => item.productId === productId)
      if(selectProduct){
        selectProduct.productPrice += selectProduct.productOriginalPrice
        selectProduct.quantityProduct += 1
      }
    },  
    decrementProduct: (state, action) => {
      const {productId} = action.payload
      const selectProduct = state.cart.find(item => item.productId === productId)
      if(selectProduct){
        if(selectProduct.quantityProduct > 1){
          selectProduct.productPrice -= selectProduct.productOriginalPrice
          selectProduct.quantityProduct -= 1
        }
      }
    },
    // checkedProduct: (state, action) => {

    // }
  },
})

export const {addToCart, removeFromCart, incrementProduct, decrementProduct} = shopCardReducer.actions

export default shopCardReducer.reducer