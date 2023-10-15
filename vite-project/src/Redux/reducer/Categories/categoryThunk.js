import { instance } from "../../../api";
import { createAsyncThunk } from "@reduxjs/toolkit"; 

export const getCategories = createAsyncThunk(
    "categories/getCategories" ,
    async (_, { rejectWithValue }) => {
        try {
            const res = await instance.get("/categories?populate=*")
            return res.data
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

//! CategoryId
export const getCategoriesId = createAsyncThunk(
    "categories/getCategoriesId" ,
    async ({ rejectWithValue }) => {
        try {
            const res = await instance.get("/categories?populate=*")
            return res.data
        } catch (error) {
            rejectWithValue(error)
        }
    }
)
