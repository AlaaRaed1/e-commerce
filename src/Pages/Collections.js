import React, { useEffect, useState } from "react";
import Product from "../components/Product";
export default function Collection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const elements = data.map((item, index) => {
    return <Product item={item} key={index} />;
  });

  return (
    <div>
      <div className="container p-0 mt-5 mb-5 ">
        <div
          className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 cards-container"
          style={{ flexWrap: "wrap" }}
        >
          {elements}
        </div>
      </div>
    </div>
  );
}
