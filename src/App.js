import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Product from "./pages/Product";
import DetailProduct from "./pages/DetailProduct";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<DetailProduct />} />
        <Route path="/login" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
