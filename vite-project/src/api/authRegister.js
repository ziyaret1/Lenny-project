import axios from "axios";

export const register = async (registerObj) => {
  const res = await axios.post(
    "http://localhost:1337/api/auth/local/register",
    JSON.stringify(registerObj),
    {
      headers: {
        "Content-Type":"application/json",
      },
    }
  )
  
  return res.data
};
