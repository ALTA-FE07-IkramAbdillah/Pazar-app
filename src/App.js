import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import Jumbotron from "./components/Jumbotron";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Jumbotron />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
