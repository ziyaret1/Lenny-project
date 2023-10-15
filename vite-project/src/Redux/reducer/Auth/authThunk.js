import { createAsyncThunk } from "@reduxjs/toolkit";
import { register } from '../../../api/authRegister'

export const fetchAuthRegister = createAsyncThunk(
    "auth/fetchAuthRegister",
    async (regObj, { rejectWithValue }) => { 
      console.log(regObj, 'thunk');
      try {
        const result = await register(regObj);
        return result.data;
      } 
      catch (error) {
        return rejectWithValue("Nese problem oldu");
      }
    } 
  );
