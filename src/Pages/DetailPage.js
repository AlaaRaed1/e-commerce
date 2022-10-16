import { useState, useEffect } from "react";
import cart from "../images/iconCart.svg";
import { Button } from "react-bootstrap";
import { setQuantity } from "../redux/Reducer";
import { useDispatch } from "react-redux";
export default function DetailPage() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem("product"))
  );
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("product"));
    setProduct(item);
  }, []);
  function handleCountChange(e) {
    const number = parseInt(e.target.value);
    setCount(number);
  }

  return (
    <div className="product-container">
      <img src={product.image || product.images[0]} alt="" id="detail-img" />

      <div className=" mx-auto d-flex mw-100 align-items-start flex-column m-0 ps-lg-5 px-3">
        <p className=" designer">Sneakers Company</p>
        <div className="title-div">
          <h2 className=" fw-bold">{product.title}</h2>
        </div>
        <p
          className=" text-black-50"
          style={{ fontSize: "var(--step--2)" }}
          id="cart-description"
        >
          {product.description}
        </p>
        <div className="price-discount-div ">
          <p className=" text-black-50 text-decoration-line-through fs-6 m-0">{`$${
            product.price * count
          }`}</p>
          <div className="d-flex align-items-center w-25 justify-content-between">
            ${Math.floor((product.price * count) / 2) + ".00"}
            <div className="discount">50%</div>
          </div>
        </div>
        <div className="d-flex w-100  justify-content-between align-items-center rounded text-center mb-2 mt-auto">
          <form className="d-flex justify-content-between  w-25 ">
            <label htmlFor="category" className="fw-bold">
              Quantity:
            </label>
            <select
              onChange={handleCountChange}
              value={count}
              name="form"
              className="ms-2"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
            </select>
          </form>
          <Button
            id="add-to-cart-button"
            onClick={() => dispatch(setQuantity(product, count))}
          >
            <div>
              <img src={cart} alt="" style={{ width: "1.5em" }} />
            </div>

            <p style={{ textAlign: "center", margin: "auto 0" }}>Add to cart</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
