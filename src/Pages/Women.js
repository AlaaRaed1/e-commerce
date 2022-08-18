import React, { useEffect, useState } from "react";
import WomenClothing from "../components/WomenClothing";
export default function Men() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/women's clothing`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [data]);

  const products = data.map((item, index) => {
    return <WomenClothing item={item} key={index} />;
  });

  return (
    <div className="container p-0 mt-5 mb-5 ">
      <div
        className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 cards-container"
        style={{ flexWrap: "wrap" }}
      >
        {products}
        {products}
        {products}
        {products}
      </div>
    </div>
  );
}
