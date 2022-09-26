import React, { useEffect, useState, useContext } from "react";
import WomenClothing from "../components/WomenClothing";

import Context from "../Context/Context";
export default function Women() {
  const [womenContent, setWomenContent] = useState([]);

  const { addToCart, getDetailPageProductData } = useContext(Context);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/women's clothing`)
      .then((res) => res.json())
      .then((data) => {
        setWomenContent(data);
        if (!localStorage.getItem("cart")) {
          localStorage.setItem("cart", "[]");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const womenProducts = womenContent.map((item, index) => {
    return (
      <WomenClothing
        item={item}
        key={index}
        addToCart={addToCart}
        getDetailPageProductData={getDetailPageProductData}
      />
    );
  });

  return (
    <div
      className="container p-4 mt-5 justify-content-evenly "
      style={{ width: "90%" }}
    >
      <div className=" d-flex flex-wrap">{womenProducts}</div>
      <div className=" d-flex flex-wrap">{womenProducts}</div>
      <div className=" d-flex flex-wrap">{womenProducts}</div>
      <div className=" d-flex flex-wrap">{womenProducts}</div>
    </div>
  );
}
