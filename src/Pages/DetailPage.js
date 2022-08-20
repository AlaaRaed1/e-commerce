import React, { useState } from "react";
import image from "../images/imageProduct.jpg";
import cart from "../images/iconCart.svg";
import plus from "../images/iconPlus.svg";
import minus from "../images/iconMinus.svg";
export default function Home() {
  const [count, setCount] = useState(1);
  const [price] = useState(125.0);
  return (
    <>
      <div className="product-container">
        <img src={image} alt="" className="product-img" />
        <div className="product-info">
          <p className="product-category designer">Sneakers Company</p>
          <div className="title-div">
            <h2 className="product-title">Fall limited Edition Sneakers</h2>
          </div>
          <p className="product-description">
            lora ipsum dolor sit amet, consectetur adipisicing elit. Vel,
            beatae!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Tenetur voluptatibus commodi, est eveniet amet
          </p>
          <div className="price-discount-div">
            <div className="price">
              ${price * count}
              <div className="discount">50%</div>
            </div>
            <p className="before-discount">{`$${250 * count + ".00"}`}</p>
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
    </>
  );
}
