import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import EditarProdutos from './pages/EditarProdutos/EditarProdutos';
import AdicionarProdutos from './pages/AddProdutos/AdicionarProdutos';
import Home from './pages/Home/Home';
import Carrinho from './pages/Carrinho/Carrinho';
import Header from "./pages/header/Header";
import './pages/Home/style.css'
import React from "react";


export const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/EditarProdutos" element={<EditarProdutos />}></Route>
        <Route path="/AdicionarProdutos" element={<AdicionarProdutos />}></Route>
        <Route path="/Carrinho" element={<Carrinho />}></Route>
      </Routes>
    </BrowserRouter>

  )
}
