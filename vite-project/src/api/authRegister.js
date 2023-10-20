import { instance } from ".";
import axios from "axios";

//! REGISTER
export const register = async (registerObj) => {
  const res = await instance.post(
    "/auth/local/register",
    JSON.stringify(registerObj)
  )
  
  return res.data
};

//! LOGIN
export const login = async (loginObj) => {
  const res = await axios.post(
    "http://localhost:1337/api/auth/local",
    JSON.stringify(loginObj),
    {
      headers: {
        Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
};
