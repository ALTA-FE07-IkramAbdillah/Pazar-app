import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import axios from "axios"
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import Detail from "./components/Detail";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

function App() {

  const [cookies] = useCookies()

  // Set bearer token
  axios.defaults.headers.common = {
    "Authorization": `Bearer ${cookies.token}`
  }

  return (
    <>
      <CookiesProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </>
  );
}
export default App;
