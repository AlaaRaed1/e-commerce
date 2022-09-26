import React, { useState, useEffect, useContext } from "react";
import Product from "../components/Product";
import Context from "../Context/Context";

function Main() {
  const [mainContent, setMainContent] = useState([]);
  const [form, setForm] = useState("4");

  const { addToCart, getDetailPageProductData } = useContext(Context);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/categories/${form}/products`)
      .then((res) => res.json())
      .then((data) => {
        setMainContent(data);
      })
      .catch((err) => console.log(err));
  }, [form]);

  function handleFormChange(e) {
    setForm(() => e.target.value);
  }

  const products = mainContent.map((item, index) => {
    return (
      <Product
        item={item}
        key={index}
        id={item.id}
        addToCart={addToCart}
        getDetailPageProductData={getDetailPageProductData}
      />
    );
  });

  return (
    <>
      <form className="d-flex justify-content-center mt-5">
        <span>
          <label htmlFor="category">Category: </label>
          <select
            onChange={handleFormChange}
            value={form}
            name="form"
            className="ms-2"
          >
            <option value="1">Clothes</option>
            <option value="2">Electronics</option>
            <option value="3">Furniture</option>
            <option value="4">Shoes</option>
            <option value="5">Others</option>
          </select>
        </span>
      </form>

      <div
        className="container p-4 mt-5 justify-content-evenly "
        style={{ width: "90%" }}
      >
        <div className="d-flex flex-wrap">{products}</div>
      </div>
    </>
  );
}
export default Main;
