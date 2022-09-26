import React, { useState } from "react";
import cart from "../images/iconCart.svg";
import plus from "../images/iconPlus.svg";
import minus from "../images/iconMinus.svg";
function DetailsProduct({ product }) {
  const { title, description, price, images } = product;
  const [count, setCount] = useState(1);
  console.log(product);
  return (
    <div className="product-container">
      <img src={images[0]} alt="" className="product-img" />
      <div className="product-info">
        <p className="product-category designer">Sneakers Company</p>
        <div className="title-div">
          <h2 className="product-title">{title}</h2>
        </div>
        <p className="product-description">{description}</p>
        <div className="price-discount-div">
          <div className="price">
            ${price * count}
            <div className="discount">50%</div>
          </div>
          <p className="before-discount">{`$${price * count + ".00"}`}</p>
        </div>
        <div className="cart-quantity-container">
          <div className="add-minus">
            <div
              className="minus"
              onClick={() => {
                if (count <= 0) {
                  setCount(0);
                } else {
                  setCount((prevCount) => (prevCount -= 1));
                }
              }}
            >
              <img src={minus} alt="minus" className="minus-icon" />
            </div>
            <p className="product-quantity">{count}</p>
            <div
              className=" add"
              onClick={() => {
                setCount((prevCount) => (prevCount += 1));
              }}
            >
              <img src={plus} className="add-icon" alt="add" />
            </div>
          </div>
          <button className=" add-to-cart-button">
            <img src={cart} alt="" className="add-cart-icon" />
            <span className="add-cart">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;
