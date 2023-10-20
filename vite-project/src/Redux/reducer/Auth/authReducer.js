import { createSlice } from '@reduxjs/toolkit'
import { fetchAuthLogin, fetchAuthRegister } from './authThunk'

const initialState = {
  jwtToken: "",
  userDatas: {},
  error: "",
  status: "nothing",
}
// Sinxron function`lar bura yazilir, mentiq daima buraya yazilir, asagidakilar action`dir
export const authReducer = createSlice({
  name: 'auth',
  initialState, 
  extraReducers: (builder) => {
    builder.addCase(fetchAuthRegister.pending, (state) => {
      state.status = "pending"
    });
    builder.addCase(fetchAuthRegister.fulfilled, (state, { payload }) => {
      state.status = "success"
      state.userDatas = payload.user
    });
    builder.addCase(fetchAuthRegister.rejected, (state, action) => {
      state.status = "error"
      state.error = action.payload
    });

    //! LOGIN
    
    builder.addCase(fetchAuthLogin.pending, (state) => {
      state.status = "pending"
    });
    builder.addCase(fetchAuthLogin.fulfilled, (state) => {
      state.status = "success"
      console.log(state.status, 'statestatus');
    });
    builder.addCase(fetchAuthLogin.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  }
})

//! actionlardan cixartmag ucun ve oturmek ucun ise dispatch lazimdir.
// export const {} = authReducer.actions

export default authReducer.reducer