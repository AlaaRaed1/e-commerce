import React from "react";
import "./App.css";
import DetailPage from "./Pages/DetailPage";
import Collections from "./Pages/Collections";
import Nav from "./components/Nav";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Main from "./Pages/Main";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detailPage" element={<DetailPage />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
