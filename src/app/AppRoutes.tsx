import { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { OutletManager } from "./outlet/OutletManager"
import Login from "./pages/Login"
import { Register } from "./pages/Register"
import { PrivateRoutes } from "./outlet/PrivateRoutes"

export const AppRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path='/auth/' element={<OutletManager />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path='/' element={ <PrivateRoutes /> }>

        </Route>

        <Route path='*' element={<Navigate to='/auth/login' />} />
      </Routes>
    </Suspense>
  )
}
