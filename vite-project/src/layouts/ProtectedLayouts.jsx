import { Outlet } from "react-router-dom";
// import { useSelector } from "react-redux"
// import { Navigate, Outlet } from "react-router-dom"

const ProtectedLayouts = () => {
  // const {jwtToken} = useSelector((state) => state.auth)
  // return !jwtToken ? <Outlet /> : <Navigate to="/"/>

  return <Outlet />;
};

export default ProtectedLayouts;
