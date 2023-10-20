import { instance } from "../../../api";
import { createAsyncThunk } from "@reduxjs/toolkit"; 
import { getProductByCategoryId } from "../../../api/product";

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

//! GET PRODUCT BY CATEGORY ID
export const getProdbyCategoryId = createAsyncThunk(
    "categories/getProdbyCategoryId",
    async (data, { rejectWithValue }) => {
        try {
            const res = await getProductByCategoryId(data.id, data.page)
            return res
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

//! 
