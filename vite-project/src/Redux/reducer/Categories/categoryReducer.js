import { createSlice } from '@reduxjs/toolkit'
import { getCategories } from './categoryThunk';

const initialState = {
  categories: [],
  loading: false,
}

export const categoryReducer = createSlice({
  name: 'categories',
  initialState,
  reducers: { // Sinxron function`lar bura yazilir, mentiq daima buraya yazilir, asagidakilar action`dir
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false
      state.categories = action.payload
      console.log(action.payload);
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false
      console.log(action.payload);
    });
  }
})

//! actionlardan cixartmag ucun ve oturmek ucun ise dispatch lazimdir (app.jsx`de)
// export const {} = categoryReducer.actions

export default categoryReducer.reducer