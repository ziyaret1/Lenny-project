import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedLayouts = () => {

  const {jwtToken} = useSelector((state) => state.auth)

  return !jwtToken ? <Outlet /> : <Navigate to="/"/>
  
}

export default ProtectedLayouts