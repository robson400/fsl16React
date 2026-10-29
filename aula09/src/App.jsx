import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import Products from "./components/pages/Products"
import Tasks from "./components/pages/Tasks"
import ProductDetails from "./components/pages/ProductDetails"

import './Global.css'

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/p/:id" element={<ProductDetails />} />
        <Route path="/tarefas" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
