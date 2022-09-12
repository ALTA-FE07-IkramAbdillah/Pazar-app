import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import Jumbotron from "./components/Jumbotron";
import Detail from "./components/Detail";
// import { Provider } from "react-redux";
// import store from "./redux/reducer/store";

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Jumbotron />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
      {/* </Provider> */}
    </>
  );
}
export default App;
