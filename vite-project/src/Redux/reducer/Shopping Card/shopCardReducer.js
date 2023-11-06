import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  cart: [],
  loading: false,
  checkedProducts: [],
}

export const shopCardReducer = createSlice({
  name: 'shopCard',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, productPrice, quantityProduct } = action.payload
      const currentProduct = state.cart.find(item => item.productId === productId)
      if (currentProduct) {
        currentProduct.productPrice += productPrice
        currentProduct.quantityProduct += quantityProduct
      }
      else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((x) => x.productId !== action.payload);
      state.checkedProducts = state.checkedProducts.filter((x) => x.productId !== action.payload);
    },
    incrementProduct: (state, action) => {
      const { productId } = action.payload
      const selectProduct = state.cart.find(item => item.productId === productId)
      const selectProductCheck = state.checkedProducts.find(item => item.productId === productId)
      if (selectProduct) {
        selectProduct.productPrice += selectProduct.productOriginalPrice
        selectProduct.quantityProduct += 1
      }
      if (selectProductCheck) {
        selectProductCheck.productPrice += selectProductCheck.productOriginalPrice
        selectProductCheck.quantityProduct += 1
      }
    },
    decrementProduct: (state, action) => {
      const { productId } = action.payload
      const selectProduct = state.cart.find(item => item.productId === productId)
      const selectProductCheck = state.checkedProducts.find(item => item.productId === productId)
      if (selectProduct) {
        if (selectProduct.quantityProduct > 1) {
          selectProduct.productPrice -= selectProduct.productOriginalPrice
          selectProduct.quantityProduct -= 1
        }
      }
      if (selectProductCheck) {
        if (selectProductCheck.quantityProduct > 1) {
          selectProductCheck.productPrice -= selectProductCheck.productOriginalPrice
          selectProductCheck.quantityProduct -= 1
        }
      }
    },
    toggleCheckbox: (state, action) => {
      const { productId, checked } = action.payload;
      const productIndex = state.cart.findIndex((item) => item.productId === productId);
      if (productIndex !== -1) {
        // Find the product in the cart
        const product = state.cart[productIndex];
        product.checked = checked; // Update the checked state
        // If checked is true, add it to checkedProducts; otherwise, remove it
        if (checked) {
          state.checkedProducts.push(product);
        } else {
          state.checkedProducts = state.checkedProducts.filter(
            (item) => item.productId !== productId
          );
        }
      }

    },
  },
})

export const { addToCart, removeFromCart, incrementProduct, decrementProduct, toggleCheckbox } = shopCardReducer.actions

export default shopCardReducer.reducer