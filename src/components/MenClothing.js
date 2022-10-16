import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/Reducer";
import { useDispatch } from "react-redux";
import { Col, Card, Button } from "react-bootstrap";
export default function MenClothing({ item, getDetailPageProductData }) {
  const dispatch = useDispatch();
  return (
    <Col lg md sm={6} xs className="mb-5 d-flex justify-content-center">
      <Card style={{ width: "15em", overflow: "hidden" }} className="shadow-sm">
        <Link
          to={`/product-details`}
          onClick={() => getDetailPageProductData(item)}
        >
          <Card.Img
            variant="top"
            src={item.image}
            style={{ height: "12em", objectFit: "contain" }}
          />
        </Link>

        <Card.Body>
          <Link
            to={`/product-details`}
            onClick={() => getDetailPageProductData(item)}
            className="text-decoration-none"
          >
            <Card.Title className="fw-bold h6">{item.title}</Card.Title>
          </Link>

          <Card.Text className="card-description">{item.description}</Card.Text>

          <p className="product-price ">
            <Link
              to={`/product-details`}
              onClick={() => getDetailPageProductData(item)}
              className="text-decoration-none text-black fw-bold"
            >
              <span className="price-simple">$</span>
              {item.price}
            </Link>
          </p>

          <Button onClick={() => dispatch(addToCart(item))}>Add to cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
