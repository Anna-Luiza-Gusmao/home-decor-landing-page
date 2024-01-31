import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { Root } from "../pages/Root/Root"

export const allRouters = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
    </Route>
  )
)