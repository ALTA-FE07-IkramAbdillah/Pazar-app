// Import Library
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import axios from "axios";
// Import Components
import NavBar from "./components/NavBar";
// Import Page
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import DetailPage from "./pages/DetailPage";
import MyProductPage from "./pages/MyProductPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [cookies] = useCookies();

  // Set bearer token
  axios.defaults.headers.common = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NjMxOTYxMzIsInVzZXJJZCI6Mn0.6G5NiHcOmu-YcZ_VJSICBzicLLqzazOJP6ygEvM2yIU`,
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
            <Route path="/myproducts" element={<MyProductPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </>
  );
}
export default App;
