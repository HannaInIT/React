// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//import allProducts from "./fake-data/all-products";
// import allCategories from "./fake-data/all-categories";

import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/product/:id" element={<ProductDetail/>}/>
      {/* <h1 className="product-title">Products</h1> */}

     </Routes>
    </div>
  );
}

export default App;
