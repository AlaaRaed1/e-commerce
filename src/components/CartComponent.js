import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function CartComponent({
  item,
  getDetailPageProductData,
  removeFromCart,
}) {
  return (
    <>
      <div
        className="border mb-5 bg-white rounded-1 d-flex w-100 h-50 mx-auto align-items-center justify-content-space-between mt-md-4"
        id="card-container"
      >
        <Link
          to={`/product-details`}
          onClick={() => getDetailPageProductData(item)}
        >
          <div className="overflow-hidden me-lg-2">
            <img id="cart-img" src={item.image || item.images[0]} alt="" />
          </div>
        </Link>

        <div className=" w-100 px-3 d-flex flex-column">
          <Link
            to={`/product-details`}
            onClick={() => getDetailPageProductData(item)}
            className="card-title"
          >
            <h6 className="card-title">{item.title}</h6>
          </Link>
          <p
            className=" fw-light text-black-50 mt-2 w-75"
            id="cart-description"
          >
            {item.description}
          </p>
          <p className="product-price">
            <span className="fs-5 ">Price:</span>{" "}
            <span className="price-simple">$</span>
            <span className="fs-6 fw-bold">{item.price * item.quantity}</span>
            <span className="opacity-50 fs-6">x{item.quantity}</span>
          </p>
          <div className="w-100 px-2 d-flex justify-content-between align-items-center mb-4 ">
            <span>
              Quantity: <span className="fw-bold">{item.quantity}</span>
            </span>
            <Button
              onClick={() => removeFromCart(item)}
              className="p-2"
              style={{ fontSize: "var(--step--2)" }}
            >
              Remove Item
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
