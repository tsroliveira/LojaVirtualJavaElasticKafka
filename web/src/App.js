import React from "react";
import { Routes, Route } from "react-router-dom";
import Template from "./template/Template";
import ProductDetail from "./products/detail/ProductDetail";
import ProductUpdate from "./products/detail/ProductUpdate";
import ProductAdd from "./products/detail/ProductCreate";
import Landing from "./landing/Landing";
import Produtos from "./products/Produtos";
import Login from "./auth/Login";
import Cadastro from "./auth/Cadastro";
import { AuthProvider } from './auth/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Template>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Produtos />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/productAdd" element={<ProductAdd />} />
          <Route path="/productsUpdate/:id" element={<ProductUpdate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Template>
    </AuthProvider>
  );
}

export default App;
