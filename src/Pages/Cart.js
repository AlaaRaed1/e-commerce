import React, { useContext, useEffect } from "react";
import CartComponent from "../components/CartComponent";
import Context from "../Context/Context";
import { Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/Reducer";
export default function Cart() {
  useEffect(() => {
    localStorage.setItem("product", "null");
  });
  const { getDetailPageProductData } = useContext(Context);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartContent =
    cart === null || undefined || cart.length === 0 ? (
      <Container
        className=" d-flex justify-content-center align-items-center"
        style={{ height: "60vh" }}
      >
        <h1>Cart is empty</h1>
      </Container>
    ) : (
      cart.map((item, i) => {
        return (
          <CartComponent
            item={item}
            key={i}
            getDetailPageProductData={getDetailPageProductData}
          />
        );
      })
    );
  const getCartTotalCost = () => {
    let total = 0;
    if (cart === null || undefined || cart.length === 0) {
      return "";
    } else {
      cart.map((item) => {
        return (total += item.price * item.quantity);
      });
    }

    return Math.floor(total);
  };

  return (
    <>
      <Container className=" mt-5" style={{ width: "90%" }}>
        {cartContent}
      </Container>
      {cart.length >= 1 ? (
        <div className="d-flex w-75 justify-content-between pb-5 mt-5 align-items-center">
          <span className="fs-6 ">
            Total price: <span className="fs-6 fw-bold">$</span>
            <span className="fs-6 fw-bold">
              {getCartTotalCost() / 2}
              <span style={{ fontSize: "8px" }}> (after discount)</span>
            </span>
          </span>
          <Button
            variant="danger"
            onClick={() => dispatch(clearCart([]))}
            className="p-2"
            style={{ fontSize: "var(--step--2)" }}
          >
            Clear cart
          </Button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
