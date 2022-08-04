import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditarProdutos from "./pages/EditarProduto/EditarProdutos";
import AdicionarProdutos from "./pages/AdicionarProduto/AdicionarProdutos";
import Home from "./pages/PageHome/item/Home";
import Carrinho from "./pages/Carrinho/Carrinho";
import Header from "./pages/Header";
import "./pages/style.css";
import React from "react";

export const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        theme="colored"
        autoClose={3000}
      />
      <>
        <Header />
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/EditarProdutos/:id"
              element={<EditarProdutos />}
            ></Route>
            <Route
              path="/AdicionarProdutos"
              element={<AdicionarProdutos />}
            ></Route>
            <Route path="/Carrinho/:id" element={<Carrinho />}></Route>
          </Routes>
        </div>
      </>
    </>
  );
};
