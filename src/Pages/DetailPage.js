import { useState, useContext } from "react";
import cart from "../images/iconCart.svg";
import Context from "../Context/Context";
import shoesImage from "../images/imageProduct.jpg";
import { Button } from "react-bootstrap";
export default function DetailPage() {
  const { detailPageProduct, setQuantity } = useContext(Context);

  console.log(detailPageProduct);
  const [count, setCount] = useState(1);
  function handleFormChange(e) {
    setCount(() => e.target.value);
  }
  return (
    <div className="product-container align-items-center">
      <div style={{ height: "20em" }}>
        <img
          src={
            detailPageProduct === undefined || null
              ? shoesImage
              : detailPageProduct.image || detailPageProduct.images[0]
          }
          alt=""
          className="w-50 rounded-3 h-100"
          style={{ objectFit: "cover", minWidth: "100%" }}
        />
      </div>
      <div className=" mx-auto d-flex mw-100 align-items-start flex-column m-0 ps-lg-5 px-3">
        <p className=" designer">Sneakers Company</p>
        <div className="title-div">
          <h2 className=" fw-bold">
            {detailPageProduct === undefined || null
              ? "Fall Limited Edition Sneakers"
              : detailPageProduct.title}
          </h2>
        </div>
        <p className=" text-black-50" style={{ fontSize: "var(--step--2)" }}>
          {detailPageProduct === undefined || null
            ? "These low-profile sneakers are your prefect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
            : detailPageProduct.description}
        </p>
        <div className="price-discount-div ">
          <div className="d-flex align-items-center w-25 justify-content-between">
            $
            {detailPageProduct === undefined || null
              ? (125 * count) / 2
              : (detailPageProduct.price * count) / 2 + ".00"}
            <div className="discount">50%</div>
          </div>
          <p className=" text-black-50 text-decoration-line-through fs-6">{`$${
            detailPageProduct === undefined || null
              ? 125 * count * 2
              : detailPageProduct.price * count
          }`}</p>
        </div>
        <div className=" d-flex w-100  justify-content-between align-items-center rounded text-center mb-2 mt-auto">
          <form className="d-flex justify-content-between  w-25 ">
            <label htmlFor="category" className="fw-bold">
              Quantity:
            </label>
            <select
              onChange={handleFormChange}
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
            onClick={() => setQuantity(detailPageProduct, count)}
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
