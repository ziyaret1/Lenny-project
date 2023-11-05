import { createSlice } from '@reduxjs/toolkit'
import { getCategories, getFilteredProduct, getProdbyCategoryId } from './categoryThunk';

const initialState = {
  categories: [],
  loading: false,
  currentPage: 1,
  categoryProd: [],
  filterObj: {
    color: "",
    price: ["", ""],
    type: "",
    sort: "",
    rating: false,
    id: "",
    page: "" 
  }
}

export const categoryReducer = createSlice({
  name: 'categories',
  initialState,
  reducers: { // Sinxron function
  setCurrentPage: (state, action) => {
    state.currentPage = action.payload
  },
  setCurrentObj: (state, action) => {
    state.filterObj[action.payload.name] = action.payload.value
  }
  },
  extraReducers: (builder) => {
    //! GETCATEGORIES
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false
      state.categories = action.payload
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.loading = false
    });

    //! PRODUCTBYCATEGORYID
    builder.addCase(getProdbyCategoryId.pending, (state) => {
      state.loading = true
    });
    builder.addCase(getProdbyCategoryId.fulfilled, (state, action) => {
      state.loading = false
      state.categoryProd = action.payload
    });
    builder.addCase(getProdbyCategoryId.rejected, (state) => {
      state.loading = false
    });
    //!FILTERING
    builder.addCase(getFilteredProduct.pending, (state) => {
      state.loading = true
    });
    builder.addCase(getFilteredProduct.fulfilled, (state, action) => {
      state.loading = false
      state.categoryProd = action.payload
    });
    builder.addCase(getFilteredProduct.rejected, (state) => {
      state.loading = false
    });
  }, 

})

//! actionlardan cixartmag ucun ve oturmek ucun ise dispatch lazimdir (app.jsx`de)
export const {setCurrentPage, setCurrentObj} = categoryReducer.actions

export default categoryReducer.reducer



//! for different color
 // for different color
    // state.filterObj.color.push(action.payload);
    // state.filterObj.color.filter((color) => color != action.payload)