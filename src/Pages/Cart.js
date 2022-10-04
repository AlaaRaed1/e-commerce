import React, { useContext, useEffect } from "react";
import CartComponent from "../components/CartComponent";
import Container from "react-bootstrap/Container";
import Context from "../Context/Context";
import { Button } from "react-bootstrap";
export default function Cart() {
  const { getDetailPageProductData, cart, setCart, clearCart, removeFromCart } =
    useContext(Context);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("cart"));
    setCart(storage);
  }, [setCart]);

  const cartContent =
    cart === null || undefined
      ? ""
      : cart.map((item, i) => {
          return (
            <CartComponent
              item={item}
              key={i}
              getDetailPageProductData={getDetailPageProductData}
              removeFromCart={removeFromCart}
            />
          );
        });
  const getCartTotal = () => {
    let total = 0;
    if (cart === null || undefined) {
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
      {cart === null || cart.length === 0 ? (
        <div
          className="w-100  d-flex justify-content-center align-items-center position-relative"
          style={{ height: "80vh" }}
        >
          <h1>Cart is empty</h1>
        </div>
      ) : (
        <>
          <Container className="w-75 mt-5">{cartContent}</Container>
          <div className="d-flex w-75 justify-content-between pb-5">
            <span className="fs-6 ">
              Total price: <span className="fs-6 fw-bold">$</span>
              <span className="fs-6 fw-bold">
                {getCartTotal() / 2}{" "}
                <span style={{ fontSize: "8px" }}>(after discount)</span>
              </span>
            </span>
            <Button
              variant="danger"
              onClick={clearCart}
              className="p-2"
              style={{ fontSize: "var(--step--2)" }}
            >
              Clear cart
            </Button>
          </div>
        </>
      )}
    </>
  );
}
