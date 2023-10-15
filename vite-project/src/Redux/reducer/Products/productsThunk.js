import { instance } from "../../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLimitedProduct } from "../../../api/product";


export const getAllProducts = createAsyncThunk(
    "products/getAllProducts" ,
    async (_, { rejectWithValue }) => {
        try {
            const res = await instance.get("/products?populate=*")
            return res.data
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

//! Limit
export const getLimitedProductThunk = createAsyncThunk(
    "products/getLimitedProductThunk" ,
    async (limit, { rejectWithValue }) => {
        try {
           const data = await getLimitedProduct(limit)
           return data.data
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

//! Product by ID
export const getSingleProductThunk = createAsyncThunk(
    "products/getSingleProductThunk" ,
    async (limit, { rejectWithValue }) => {
        try {
           const data = await getLimitedProduct(limit)
           return data.data
        } catch (error) {
            rejectWithValue(error)
        }
    }
)
