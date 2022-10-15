import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/Reducer";
import { useDispatch } from "react-redux";
export default function WomenClothing({ item, getDetailPageProductData }) {
  const dispatch = useDispatch();
  return (
    <div
      className="card shadow-sm p-0 mb-5 bg-white rounded mx-auto"
      id="card-container"
    >
      <Link
        to={`/product-details`}
        onClick={() => getDetailPageProductData(item)}
      >
        <div className="overflow-hidden">
          <img className="card-img-top" src={item.image} alt="" id="card-img" />
        </div>
      </Link>

      <div className="card-body">
        <Link
          to={`/product-details`}
          onClick={() => getDetailPageProductData(item)}
          className="text-decoration-none"
        >
          <h6 className="card-title">{item.title}</h6>
        </Link>

        <p className="card-description">{item.description}</p>

        <p className="product-price ">
          <Link
            to={`/product-details`}
            onClick={() => getDetailPageProductData(item)}
            className="text-decoration-none text-black fw-bold"
          >
            <span className="price-simple ">$</span>
            {item.price}
          </Link>
        </p>

        <button
          className="btn btn-primary"
          onClick={() => dispatch(addToCart(item))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
