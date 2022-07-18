import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import EditarProdutos from './pages/EditarProdutos';
import AdicionarProdutos from './pages/AdicionarProdutos';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';
import Header from "./pages/Header";
import './pages/style.css'
import React from "react";
import { display } from "styled-system";
import Redirect from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/EditarProdutos" element={<EditarProdutos />}></Route>
          <Route path="/AdicionarProdutos" element={<AdicionarProdutos />}></Route>
          <Route path="/Carrinho" element={<Carrinho />}></Route>
        </Routes>
      </div>
    </BrowserRouter>

  )
}
