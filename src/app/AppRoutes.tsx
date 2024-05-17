import { Suspense, lazy } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { OutletManager } from "./outlet/OutletManager"

import { PrivateRoutes } from "./outlet/PrivateRoutes"
import { AuthProvider } from "../context/AuthProvider"

const Login = lazy(() => { return import('./pages/Login') })
const Register = lazy(() => { return import('./pages/Register') })
const Home = lazy(() => { return import('./pages/private/Home') })

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Cargando..</div>}>
      <AuthProvider>
        <Routes>
          <Route path='/auth/' element={<OutletManager />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path='/' element={<PrivateRoutes />}>
            <Route index element={<Home />} />
          </Route>

          <Route path='*' element={<Navigate to='/auth/login' />} />
        </Routes>
        </AuthProvider>
      </Suspense>
  )
}
