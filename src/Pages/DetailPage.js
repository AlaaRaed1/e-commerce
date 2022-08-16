import React, { useState } from "react";
import image from "../Images/image-product-1.jpg";
import cart from "../Images/icon-cart.svg";
import plus from "../Images/icon-plus.svg";
import minus from "../Images/icon-minus.svg";
export default function Home() {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(125.0);
  function increaseCount() {
    setCount((prevCount) => (prevCount += 1));
  }
  function decreaseCount() {
    setCount((prevCount) => (prevCount === 0 ? 0 : prevCount - 1));
  }
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
            beatae!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Tenetur voluptatibus commodi, est eveniet amet
          </p>
          <div className="price-discount-div">
            <div className="price">
              ${price * count + ".00"}
              <div className="discount">50%</div>
            </div>
            <p className="before-discount">{`$${250 * count + ".00"}`}</p>
          </div>
          <div className="cart-quantity-container">
            <div className="add-minus">
              <div className="minus" onClick={decreaseCount}>
                <img src={minus} alt="minus" className="minus-icon" />
              </div>
              <p className="product-quantity">{count}</p>
              <div className=" add" onClick={increaseCount}>
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
