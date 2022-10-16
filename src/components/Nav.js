import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../images/iconMenu.svg";
import {
  Nav,
  Navbar,
  Row,
  Offcanvas,
  NavbarBrand,
  Container,
} from "react-bootstrap";
import emptyCart from "../images/iconCartNav.svg";
import avatar from "../images/profileAvatar.png";
import Context from "../Context/Context";
import { useSelector } from "react-redux";
export default function Navigation() {
  const { show, handleShow, handleClose } = useContext(Context);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const total = useSelector((state) => state.total);
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth } = window;
    return innerWidth;
  }

  return (
    <>
      {windowSize > 720 ? (
        <Navbar className="w-75 border-bottom pb-0">
          <Container className="gap-4">
            <Navbar.Brand className="fw-bold fs-3">
              <Link
                to="/"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Sneakers
              </Link>
            </Navbar.Brand>
            <Nav className="me-auto " style={{ height: "5em" }}>
              <Link to="/collections" id="link">
                Collections
              </Link>
              <Link to="/men" id="link">
                Men
              </Link>
              <Link to="/women" id="link">
                Women
              </Link>
              <Link to="/about" id="link">
                About
              </Link>
              <Link to="/contact" id="link">
                Contact
              </Link>
            </Nav>
          </Container>
          <Container className="d-flex justify-content-end w-25 gap-4">
            <Link to="/cart" className="text-decoration-none">
              <div className="d-flex cart-container">
                <img src={emptyCart} alt="cart" className="cart" />
                <div className="cart-total-items">{total}</div>
              </div>
            </Link>

            <img src={avatar} alt="profile" className="avatar" />
          </Container>
        </Navbar>
      ) : (
        <>
          <Navbar className="mobile-navbar">
            <Nav className="justify-content-center flex-grow-1 pe-3 align-content-center w-100">
              <div className="menu-title-container">
                <NavbarBrand>
                  <img src={menuIcon} onClick={handleShow} alt="" />
                </NavbarBrand>
                <Navbar.Brand>
                  <Link
                    to="/"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    <span className="mobile-nav-title">Sneakers</span>
                  </Link>
                </Navbar.Brand>
              </div>
              <div className="mobile-cart-avatar-container">
                <Link to="/cart" className=" text-decoration-none">
                  <div className=" d-flex ">
                    <img src={emptyCart} alt="cart" className="cart" />
                    <div className="cart-total-items">{total}</div>
                  </div>
                </Link>

                <img src={avatar} alt="" className="avatar-mobile" />
              </div>
            </Nav>
          </Navbar>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton className="border-bottom ">
              <Offcanvas.Title>
                <Link
                  to="/"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                  onClick={handleClose}
                >
                  <span className="mobile-nav-title">Sneakers</span>
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Container>
                <Row>
                  <Link
                    to="/collections"
                    className="border-bottom border-opacity-25 link p-2 text-black opacity-75 text-decoration-none"
                    onClick={handleClose}
                  >
                    collections
                  </Link>
                </Row>
                <Row>
                  <Link
                    to="men"
                    className="border-bottom border-opacity-25 link p-2 text-black opacity-75 text-decoration-none"
                    onClick={handleClose}
                  >
                    Men
                  </Link>
                </Row>

                <Row>
                  <Link
                    to="women"
                    className="border-bottom border-opacity-25 link p-2 text-black opacity-75 text-decoration-none"
                    onClick={handleClose}
                  >
                    Women
                  </Link>
                </Row>

                <Row>
                  <Link
                    to="about"
                    className="border-bottom border-opacity-25 link p-2 text-black opacity-75 text-decoration-none"
                    onClick={handleClose}
                  >
                    About
                  </Link>
                </Row>

                <Row>
                  <Link
                    to="contact"
                    className="border-bottom border-opacity-25 link p-2 text-black opacity-75 text-decoration-none"
                    onClick={handleClose}
                  >
                    contact
                  </Link>
                </Row>
              </Container>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </>
  );
}
