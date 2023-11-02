import { instance } from "../../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductByCategoryId } from "../../../api/product";

export const getCategories = createAsyncThunk(
    "categories/getCategories",
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
    "categories/getCategoriesId",
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
            const res = await getProductByCategoryId(data.id, data.page, data.color, data.rating)
            console.log(data.rating, 'datarating');
            return res
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

//! FILTERING
export const getFilteredProduct = createAsyncThunk(
    "categories/getFilteredProduct",
    async ({
        id,
        rating,
        color,
        price,
        type,
        sort,
        page,
    },
        thunkApi
    ) => {
        try {
            console.log(color, 'color');
            console.log(rating, 'rating');
            const res = await instance.get(
                `/products?populate=*&[filters][categories][id][$eq]=${id
                }&[filters][rating][$gte]=${rating ? "4" : ""}${color && `&[filters][color][$eq]=${color}`
                }${type && `&[filters][type][$eq]=${type}`}${price[0] && `&[filters][price][$gte]=${price[0]}`
                }${price[1] && `&[filters][price][$lte]=${price[1]}`
                }${sort && `&sort=price:${sort}`}&pagination[page]=${page}&pagination[pageSize]=12`
            );
            return res.data;
        }
         catch (error) {
            thunkApi.rejectWithValue(error);
        }
    }
);

