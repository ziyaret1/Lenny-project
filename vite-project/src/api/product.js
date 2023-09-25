import { instance } from "./index"

//! GET CATEGORIES
export const getCategories = async () => {
    const res = await instance.get("/categories?populate=*")
    return res.data;
}

//! GET PRODUCTS
export const getProducts = async () => {
    const res2 = await instance.get("/products?populate=*")
    return res2.data
}

//! GET LIMIT
export const getLimitedProduct = async (limit) =>{
    const res3 = await instance.get(`/products?populate=*&pagination[limit]=${limit}`)
    return res3.data
}

//! GET PRODUCT BY CATEGORY ID
export const getProductByCategoryId = async (id) =>{
    const res4 = await instance.get(`/products?populate=*&[filters][categories][id][$eq]=${id}`)
    return res4.data
}






