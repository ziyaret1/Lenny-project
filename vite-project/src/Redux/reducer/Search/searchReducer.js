import { createSlice } from '@reduxjs/toolkit'
import { getSearchingData } from './searchThunk';


const initialState = {
  loading: false,
  searchDatas: {}
}

export const searchReducer = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => { 
    builder.addCase(getSearchingData.pending, (state) => {
      state.loading = true
    });
    builder.addCase(getSearchingData.fulfilled, (state, action) => {
      state.loading = false
      state.searchDatas = action.payload
    });
    builder.addCase(getSearchingData.rejected, (state) => {
      state.loading = false
    });
  },
})

// export const {} = searchReducer.actions

export default searchReducer.reducer