import React, { useState, useEffect, useContext } from "react";
import Product from "../components/Product";
import Context from "../Context/Context";

function Main() {
  const [mainContent, setMainContent] = useState([]);
  const [form, setForm] = useState("4");
  const [sort, setSort] = useState("default");
  const { addToCart, getDetailPageProductData } = useContext(Context);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/categories/${form}/products`)
      .then((res) => res.json())
      .then((data) => {
        if (sort === "default") {
          setMainContent(data);
        } else if (sort === "Low to High") {
          const sortedArray = data.sort((a, b) => {
            return a.price - b.price;
          });

          setMainContent(sortedArray);
        } else {
          const sortedArray = data.sort((a, b) => {
            return b.price - a.price;
          });

          setMainContent(sortedArray);
        }
      })
      .catch((err) => console.log(err));
  }, [form, sort]);

  function handleCategoryChange(e) {
    setForm(() => e.target.value);
  }
  function handleSortChange(e) {
    setSort(() => e.target.value);
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
      <form className="d-flex  mt-5 ">
        <div>
          <label htmlFor="category">Category: </label>
          <select
            onChange={handleCategoryChange}
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
        </div>
        <div className=" ms-lg-3">
          <label htmlFor="sort">Sort: </label>
          <select
            onChange={handleSortChange}
            value={sort}
            name="sort"
            className="ms-2"
          >
            <option value="default">default</option>
            <option value="Low to High">Price: Low to High</option>
            <option value="High to Low">Price: High to Low</option>
          </select>
        </div>
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
