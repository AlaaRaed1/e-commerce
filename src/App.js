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
  const [id, setId] = useState();
  const [detailPageProduct, setDetailPageProduct] = useState();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

  const [show, setShow] = useState(false);
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("cart"));
    setCart(storage);
  }, []);
  function addToCart(product) {
    const newCart = cart;
    let itemInCart = newCart.find((item) => product.title === item.title);

    if (itemInCart) {
      return newCart;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  function getDetailPageProductData(product) {
    setDetailPageProduct(product);
  }
  const removeFromCart = (productToRemove) => {
    const newCart = cart.filter((product) => product !== productToRemove);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };
  function setQuantity(product, quantity) {
    const newCart = cart;
    let itemInCart = newCart.find((item) => product.title === item.title);
    if (itemInCart) {
      itemInCart.quantity = quantity;
    } else {
      itemInCart = {
        ...product,
        quantity: quantity,
      };
      newCart.push(itemInCart);
    }

    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  function clearCart() {
    localStorage.clear();
    setCart([]);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="app">
      <Provider
        value={{
          setId,
          id,
          cart,
          setCart,
          addToCart,
          getDetailPageProductData,
          detailPageProduct,
          setQuantity,
          clearCart,

          show,
          handleShow,
          handleClose,
          removeFromCart,
        }}
      >
        <Navigation />

        <Routes>
          <Route
            path="/"
            element={<Main /> /*setDetailPageData={setDetailPageData}*/}
          />
          <Route
            path="/collections"
            element={
              <Collections

              /* setDetailPageData={setDetailPageData}*/
              />
            }
          />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-details" element={<DetailPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </Provider>
    </div>
  );
}
