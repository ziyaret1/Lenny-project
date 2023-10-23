import { createSlice } from '@reduxjs/toolkit'
import { getAllProducts, getLimitedProductThunk} from './productsThunk';

const initialState = {
  products: [],
  loading: false,
}

export const productReducer = createSlice({
  name: 'products',
  initialState,
  reducers: { // Sinxron function`lar bura yazilir,asagidakilar action`dir
  },
  extraReducers: (builder) => { // asinxron function`lar bura yazilir
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.loading = false
    });
    //! LIMIT 
    builder.addCase(getLimitedProductThunk.pending, (state) => {
      state.loading = true
    });
    builder.addCase(getLimitedProductThunk.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
    });
    builder.addCase(getLimitedProductThunk.rejected, (state) => {
      state.loading = false
    });
  },
})

//! actionlardan cixartmag ucun ve oturmek ucun ise dispatch lazimdir (app.jsx`de)
// export const {} = productReducer.actions

export default productReducer.reducer