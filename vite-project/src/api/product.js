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




