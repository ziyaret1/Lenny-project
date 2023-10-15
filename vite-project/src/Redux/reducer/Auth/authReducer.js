import { createSlice } from '@reduxjs/toolkit'
import { fetchAuthRegister } from './authThunk'

const initialState = {
  jwtToken: "",
  userDatas: {},
  error: "",
  status: "nothing",
  loading: false,
}
// Sinxron function`lar bura yazilir, mentiq daima buraya yazilir, asagidakilar action`dir
export const authReducer = createSlice({
  name: 'auth',
  initialState, 
  extraReducers: {
    [fetchAuthRegister.pending]: (state) => {
      state.status = "pending";
    },
    [fetchAuthRegister.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.userDatas = payload.user;
    },
    [fetchAuthRegister.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  }
})

//! actionlardan cixartmag ucun ve oturmek ucun ise dispatch lazimdir (app.jsx`de)
// export const {} = authReducer.actions

export default authReducer.reducer