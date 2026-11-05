import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../components/pages/Home"
import Products from "../components/pages/Products"
import Tasks from "../components/pages/Tasks"
import ProductDetails from "../components/pages/ProductDetails"
import NotFound from "../components/pages/NotFound"
import Login from "../components/pages/Login"
import Cadastro from "../components/pages/Cadastro"

function AppRoutes() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/p/:id" element={<ProductDetails />} />
        <Route path="/tarefas" element={<Tasks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
