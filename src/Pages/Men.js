import React, { useEffect, useState, useContext } from "react";
import MenClothing from "../components/MenClothing";
import Context from "../Context/Context";
import { Container, Row } from "react-bootstrap";
export default function Men() {
  const [menContent, setMenContent] = useState([]);
  const { getDetailPageProductData } = useContext(Context);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/men's clothing`)
      .then((res) => res.json())
      .then((data) => {
        setMenContent(data);
        if (!localStorage.getItem("cart")) {
          localStorage.setItem("cart", "[]");
        }
      })

      .catch((err) => console.log(err));
    localStorage.setItem("product", "null");
  }, []);

  const menProducts = menContent.map((item, index) => {
    return (
      <MenClothing
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
          {menProducts}

          {menProducts}

          {menProducts}

          {menProducts}
        </Row>
      </Container>
    </Container>
  );
}
