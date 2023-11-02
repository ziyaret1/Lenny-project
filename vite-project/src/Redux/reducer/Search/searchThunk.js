import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../api";

//! For Search product
export const getSearchingData = createAsyncThunk(
    "search/getSearchingData",
    async (searchName, { rejectWithValue }) => {
        try {
            const res = await instance.get(`/products?populate=*&filters[title][$contains]=${searchName}`);
            return res.data;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);