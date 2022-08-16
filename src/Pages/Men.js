import React, { useEffect, useState } from "react";
import MenClothing from "../components/MenClothing";
import Product from "../components/Product";
export default function Men() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/men's clothing`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [data]);

  const products = data.map((item, index) => {
    return <Product item={item} key={index} />;
  });

  return (
    <div>
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
          {products}
          {products}
          {products}
        </div>
      </div>
    </div>
  );
}
