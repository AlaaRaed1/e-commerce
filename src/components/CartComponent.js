import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";
import { removeFromCart } from "../redux/Reducer";
import { useDispatch } from "react-redux";
export default function CartComponent({ item, getDetailPageProductData }) {
  const dispatch = useDispatch();
  return (
    <Row className="mt-5 mx-auto">
      <Col lg={4} md={5} sm={8} xs={12} className="mx-auto">
        <Link
          to={`/product-details`}
          onClick={() => getDetailPageProductData(item)}
        >
          <div className="overflow-hidden me-lg-2">
            <img id="cart-img" src={item.image || item.images[0]} alt="" />
          </div>
        </Link>
      </Col>
      <Col lg={8} md={6} sm={8} xs={12} className="mx-auto">
        <Container fluid className="p-0 px-2">
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
            <span className="fs-5 ">Price: </span>
            <span className="price-simple">$</span>
            <span className="fs-6 fw-bold">
              {Math.floor(item.price * item.quantity) / 2}
            </span>
            <span className="opacity-50 fs-6">x{item.quantity}</span>
          </p>
          <div className="w-100 px-2 d-flex justify-content-between align-items-center mb-4 ">
            <span>
              Quantity: <span className="fw-bold">{item.quantity}</span>
            </span>
            <Button
              onClick={() => dispatch(removeFromCart(item))}
              className="p-2"
              style={{ fontSize: "var(--step--2)" }}
            >
              Remove Item
            </Button>
          </div>
        </Container>
      </Col>
    </Row>
  );
}
