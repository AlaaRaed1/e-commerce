import React from "react";
import avatar from "../images/img_avatar1.png";
export default function Product(props) {
  const { item } = props;

  const random = Math.floor(Math.random() * 2);
  return (
    <div className="col">
      <div
        className="card shadow-sm p-0 mb-5 bg-white rounded"
        id="card-container"
      >
        <img
          className="card-img-top"
          src={item.images[random]}
          alt=""
          id="card-img"
        />
        <div className="card-body">
          <h6 className="card-title">{item.title}</h6>
          <p className="card-description">{item.description}</p>
          <p className="product-price">
            <span className="price-simple">$</span>
            {item.price}
          </p>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
