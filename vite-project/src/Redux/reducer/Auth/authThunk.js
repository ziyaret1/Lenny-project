import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from '../../../api/authRegister'


//! REGISTER THUNK
export const fetchAuthRegister = createAsyncThunk(
    "auth/fetchAuthRegister",
    async (regObj, { rejectWithValue }) => { 
      console.log(regObj, 'thunk');
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
      try {
        const result = await login(logObj);

        return result;
      } 
      catch (error) {
        return rejectWithValue("Nese problem oldu");
      }
    } 
  );
