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
  console.log(loginObj, 'loginobj');
  const res = await axios.post(
    "http://localhost:1337/api/auth/local",
    JSON.stringify(loginObj),
    {
      headers: {
        // Authorization: "bearer " + "",
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
};

// export const login = async (loginObj) => {
//   const res = await axios.post(
//     "http://localhost:1337/api/auth/local",
//     JSON.stringify(loginObj.login),
//     {
//       headers: {
//         Authorization: "bearer " + loginObj.jwt "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzAsImlhdCI6MTY5ODE1MDYxNSwiZXhwIjoxNzAwNzQyNjE1fQ.sHAovyH-Vkv4XGgiyydWl6EaD8WWpoa3aEx1jp1CeGE",
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   return res.data;
// };


//! READY JWT
// export const login = async (loginObj) => {
//   const res = await axios.post(
//     "http://localhost:1337/api/auth/local",
//     JSON.stringify(loginObj),
//     {
//       headers: {
//         Authorization: "bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzAsImlhdCI6MTY5ODE1MDYxNSwiZXhwIjoxNzAwNzQyNjE1fQ.sHAovyH-Vkv4XGgiyydWl6EaD8WWpoa3aEx1jp1CeGE",
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   return res.data;
// };