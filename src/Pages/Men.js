import React, { useEffect, useState, useContext } from "react";
import MenClothing from "../components/MenClothing";

import Context from "../Context/Context";
export default function Men() {
  const [menContent, setMenContent] = useState([]);

  const { addToCart, getDetailPageProductData } = useContext(Context);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/men's clothing`)
      .then((res) => res.json())
      .then((data) => {
        setMenContent(data);
        if (!localStorage.getItem("cart")) {
          localStorage.setItem("cart", "[]");
        }
      })

      .catch((err) => console.log(err));
  }, []);
  console.log(menContent);
  const menProducts = menContent.map((item, index) => {
    return (
      <MenClothing
        item={item}
        key={index}
        addToCart={addToCart}
        getDetailPageProductData={getDetailPageProductData}
      />
    );
  });

  return (
    <div
      className="container p-4 mt-5 justify-content-evenly"
      style={{ width: "90%" }}
    >
      <div className=" d-flex flex-wrap">{menProducts}</div>
      <div className=" d-flex flex-wrap">{menProducts}</div>
      <div className=" d-flex flex-wrap">{menProducts}</div>
      <div className=" d-flex flex-wrap">{menProducts}</div>
    </div>
  );
}
