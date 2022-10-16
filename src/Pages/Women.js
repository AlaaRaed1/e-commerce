import React, { useEffect, useState, useContext } from "react";
import WomenClothing from "../components/WomenClothing";
import { Container, Row } from "react-bootstrap";
import Context from "../Context/Context";
export default function Women() {
  const [womenContent, setWomenContent] = useState([]);
  const { getDetailPageProductData } = useContext(Context);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/women's clothing`)
      .then((res) => res.json())
      .then((data) => {
        setWomenContent(data);
        if (!localStorage.getItem("cart")) {
          localStorage.setItem("cart", "[]");
        }
      })
      .catch((err) => console.log(err));
    localStorage.setItem("product", "null");
  }, []);

  const womenProducts = womenContent.map((item, index) => {
    return (
      <WomenClothing
        item={item}
        key={index}
        getDetailPageProductData={getDetailPageProductData}
      />
    );
  });

  return (
    <Container className="mt-5 mx-auto" style={{ width: "90%" }}>
      <Container fluid>
        <Row>
          {womenProducts}

          {womenProducts}

          {womenProducts}

          {womenProducts}
        </Row>
      </Container>
    </Container>
  );
}
