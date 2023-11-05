import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from '../../../api/authRegister'

 
//! REGISTER THUNK 
export const fetchAuthRegister = createAsyncThunk(
    "auth/fetchAuthRegister",
    async (regObj, { rejectWithValue }) => { 
      try {
        const result = await register(regObj);
        return result;
        
      } 
      catch (error) {
        return rejectWithValue("Register PROBLEM");
      }
    } 
  );


  //! LOGIN THUNK
  export const fetchAuthLogin = createAsyncThunk(
    "auth/fetchAuthLogin",
    async (logObj, { rejectWithValue }) => { 
      try {
        const result = await login(logObj);
        return result;
      } 
      catch (error) {
        return rejectWithValue("Login PROBLEM");
      }
    } 
  );


