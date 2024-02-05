import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { Root } from "../pages/Root/Root"
import { HomePage } from "../pages/Home"
import { ServicesPage } from "../pages/Services"

export const allRouters = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="servicos" element={<ServicesPage/>} />
    </Route>
  )
)