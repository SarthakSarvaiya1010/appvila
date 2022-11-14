import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nevbar from "./components/navbar/Nevbar";
import {Home ,Product,  Shop , Categories, Cart ,Checkout, LoginPage} from "./pages/index"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nevbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productDetails/:slug" element={<Product />} />
          <Route path="/products/category:id" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Routes>
          <Route path="/loginPage" element={<LoginPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
