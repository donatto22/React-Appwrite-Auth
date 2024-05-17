import { Route, Routes } from "react-router-dom"
import { AppRoutes } from "../app/AppRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={ <AppRoutes/> } />
    </Routes>
  )
}
