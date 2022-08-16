import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";
export default function Main() {
  const [info, setInfo] = useState([]);
  const [form, setForm] = useState({
    category: "5",
  });

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  const products = info.map((item, index) => {
    return <Product item={item} key={index} id={item.id} />;
  });

  function handleFormChange(e) {
    setForm((prevForm) => {
      return { ...prevForm, category: e.target.value };
    });
  }
  return (
    <>
      <form className="form">
        <label htmlFor="category">Category: </label>
        <select
          onChange={handleFormChange}
          value={form.category}
          name="category"
          id="category"
        >
          <option value="1">Clothes</option>
          <option value="2">Electronics</option>
          <option value="3">Furniture</option>
          <option value="4">Shoes</option>
          <option value="5">Others</option>
        </select>
      </form>
      <div className="container p-0 mt-5 mb-5 ">
        <div
          className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 cards-container"
          style={{ flexWrap: "wrap" }}
        >
          {products}
          {products}
          {products}
          {products}
          {products}
        </div>
      </div>
    </>
  );
}