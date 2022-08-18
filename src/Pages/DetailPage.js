import React from "react";
import image from "../images/image-product-2.jpg";
import cart from "../images/icon-cart.svg";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
export default function Home() {
  let count = 1;
  let price = 125.0;

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
              ${price}
              <div className="discount">50%</div>
            </div>
            <p className="before-discount">{`$${250 * count + ".00"}`}</p>
          </div>
          <div className="cart-quantity-container">
            <div className="add-minus">
              <div
                className="minus"
                onClick={() => {
                  if (count < 0) {
                    count = 0;
                  } else {
                    count -= 1;
                  }
                }}
              >
                <img src={minus} alt="minus" className="minus-icon" />
              </div>
              <p className="product-quantity">{count}</p>
              <div
                className=" add"
                onClick={() => {
                  count += 1;
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
