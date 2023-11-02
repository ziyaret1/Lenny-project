import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from '../../../api/authRegister'


//! REGISTER THUNK 
export const fetchAuthRegister = createAsyncThunk(
    "auth/fetchAuthRegister",
    async (regObj, { rejectWithValue }) => { 
      try {
        const result = await register(regObj);
        console.log(result, 'result');
        return result;
        
      } 
      catch (error) {
        return rejectWithValue("Nese problem oldu");
      }
    } 
  );


  //! LOGIN THUNK
  export const fetchAuthLogin = createAsyncThunk(
    "auth/fetchAuthLogin",
    async (logObj, { rejectWithValue }) => { 
      console.log(logObj, 'logobj');
      try {
        const result = await login(logObj);
        console.log(result.jwt, 'reesLogin');
        return result;
      } 
      catch (error) {
        return rejectWithValue("Nese problem oldu");
      }
    } 
  );
