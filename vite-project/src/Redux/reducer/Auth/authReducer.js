import { createSlice } from '@reduxjs/toolkit'
import { fetchAuthLogin, fetchAuthRegister } from './authThunk'

const initialState = {
  jwtToken: "",
  logToken: "",
  userDatas: {},
  user: null,
  // resError: "",
  status: "", 
  error: ""
}
// Sinxron function`lar bura yazilir, mentiq daima buraya yazilir, asagidakilar action`dir
export const authReducer = createSlice({
  name: 'auth',
  initialState, 
  reducers: {
    resetAuthState: (state) => {
      state.jwtToken = "";
      state.logToken = "",
      state.userDatas = {};
      state.user = null;
      // state.resError = "",
      // state.logError = "",
      state.status = "";
      state.error = ""
    },
      updateJwtToken: (state, action) => {
        state.jwtToken = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthRegister.pending, (state) => {
      state.status = "pending"
    });
    builder.addCase(fetchAuthRegister.fulfilled, (state, action) => {
      state.status = "success"
      // state.userDatas = action.payload.user
      state.jwtToken = action.payload.jwt
    });
    builder.addCase(fetchAuthRegister.rejected, (state, action) => {
      state.status = "error"
      // state.resError = action.error.message
      state.jwtToken = ""
      state.error = action.payload
    });

    //! LOGIN  
    
    builder.addCase(fetchAuthLogin.pending, (state) => {
      state.status = "pending"
    });
    builder.addCase(fetchAuthLogin.fulfilled, (state, action) => {
      state.status = "success"
      state.userDatas = action.payload.user
      state.logToken = action.payload.jwt
    });
    builder.addCase(fetchAuthLogin.rejected, (state, action) => {
      state.status = "error";
      state.logToken = ""
      state.error = action.payload
    });
  }
})

export const {resetAuthState, updateJwtToken} = authReducer.actions

export default authReducer.reducer