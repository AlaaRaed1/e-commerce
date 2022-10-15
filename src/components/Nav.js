import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../images/iconMenu.svg";
import {
  Nav,
  Navbar,
  NavLink,
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
          <Container className=" gap-4">
            <Navbar.Brand href="/" className="fw-bold fs-3">
              Sneakers
            </Navbar.Brand>
            <Nav className="me-auto " style={{ height: "5em" }}>
              <Nav.Link href="/collections" id="link">
                Collections
              </Nav.Link>
              <Nav.Link href="/men" id="link">
                Men
              </Nav.Link>
              <Nav.Link href="/women" id="link">
                Women
              </Nav.Link>
              <Nav.Link href="/about" id="link">
                About
              </Nav.Link>
              <Nav.Link href="/contact" id="link">
                Contact
              </Nav.Link>
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
                  <NavLink as={Link} to="/">
                    <span className="mobile-nav-title">Sneakers</span>
                  </NavLink>
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
                <NavLink as={Link} to="/">
                  <span className="mobile-nav-title">Sneakers</span>
                </NavLink>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <NavLink
                as={Link}
                to="/collections"
                onClick={handleShow}
                className="border-bottom border-opacity-25 link p-2 "
              >
                collections
              </NavLink>
              <NavLink
                as={Link}
                to="/men"
                onClick={handleShow}
                className="border-bottom border-opacity-25 link p-2"
              >
                Men
              </NavLink>
              <NavLink
                as={Link}
                to="/women"
                onClick={handleShow}
                className="border-bottom border-opacity-25 link p-2"
              >
                Women
              </NavLink>
              <NavLink
                as={Link}
                to="/about"
                onClick={handleShow}
                className="border-bottom border-opacity-25 link p-2"
              >
                About
              </NavLink>
              <NavLink
                as={Link}
                to="/contact"
                onClick={handleShow}
                className="border-bottom border-opacity-25 link p-2"
              >
                contact
              </NavLink>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </>
  );
}
