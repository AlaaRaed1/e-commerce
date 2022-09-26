import React from "react";
import { Link } from "react-router-dom";
export default function WomenClothing({
  item,
  addToCart,
  getDetailPageProductData,
}) {
  return (
    <div className="col">
      <div
        className="card shadow-sm p-0 mb-5 bg-white rounded mx-auto"
        id="card-container"
      >
        <Link
          to={`/product-details`}
          onClick={() => getDetailPageProductData(item)}
        >
          <img className="card-img-top" src={item.image} alt="" id="card-img" />
        </Link>

        <div className="card-body">
          <h6 className="card-title">{item.title}</h6>
          <p className="card-description">{item.description}</p>
          <p className="product-price">
            <span className="price-simple">$</span>
            {item.price}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              addToCart(item);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
