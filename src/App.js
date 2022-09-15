import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import axios from "axios";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import DetailPage from "./pages/DetailPage";
import OrderPage from "./pages/OrderPage";

function App() {
  const [cookies] = useCookies();

  // Set bearer token
  axios.defaults.headers.common = {
    Authorization: `Bearer ${cookies.token}`,
  };

  return (
    <>
      <CookiesProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/detailpage/:id" element={<DetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path= "/order" element={<OrderPage/>}/>
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </>
  );
}
export default App;
