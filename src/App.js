import React, { useState, useEffect } from "react";
import "./App.css";
import DetailPage from "./Pages/DetailPage";
import Collections from "./Pages/Collections";
import Navigation from "./components/Nav";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Main from "./Pages/Main";
import Product from "./components/Product";
import Cart from "./Pages/Cart";
import { Provider } from "./Context/Context";
import { Routes, Route } from "react-router-dom";
export default function App() {
  useEffect(() => {
    if (localStorage.getItem("cart") === null || undefined || "") {
      localStorage.setItem("cart", "[]");
    }
  }, []);

  const [show, setShow] = useState(false);

  function getDetailPageProductData(product) {
    localStorage.setItem("product", JSON.stringify(product));
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="app">
      <Provider
        value={{
          getDetailPageProductData,

          show,
          handleShow,
          handleClose,
        }}
      >
        <Navigation />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-details" element={<DetailPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </div>
  );
}
