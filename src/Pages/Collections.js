import React, { useEffect, useState, useContext } from "react";
import Product from "../components/Product";

import Context from "../Context/Context";
export default function Collection() {
  const [collectionsContent, setCollectionsContent] = useState([]);
  const context = useContext(Context);
  const { getDetailPageProductData } = context;

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setCollectionsContent(data);
        if (!localStorage.getItem("cart")) {
          localStorage.setItem("cart", "[]");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const CollectionsProducts = collectionsContent.map((item, index) => {
    return (
      <Product
        item={item}
        key={index}
        getDetailPageProductData={getDetailPageProductData}
      />
    );
  });

  return (
    <div
      className="container p-4 mt-5 justify-content-evenly"
      style={{ width: "90%" }}
    >
      <div className="d-flex flex-wrap">{CollectionsProducts}</div>
    </div>
  );
}
