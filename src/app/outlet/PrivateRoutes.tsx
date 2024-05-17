import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoutes = () => {
  const user = false
  return user ? <Outlet/> : <Navigate to='/auth/login' />
}
