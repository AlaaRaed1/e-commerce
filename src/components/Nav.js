import React from "react";
import { Link } from "react-router-dom";
import emptyCart from "../images/iconCartNav.svg";
import avatar from "../images/profileAvatar.png";
export default function Nav() {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    margin: "0 auto",
  };
  const headerStyle = {
    textDecoration: "none",
    color: "black",
    fontFamily: "'Kumbh', sans-serif",
    fontWeight: "700",
  };
  return (
    <>
      <nav className="nav">
        <div className="nav-links-container">
          <h3 className="nav-title">
            <Link to="/" style={headerStyle}>
              Sneakers
            </Link>
          </h3>

          <p className="links-hover">
            <Link to="/collections" style={linkStyle}>
              Collections
            </Link>
          </p>
          <p className="links-hover">
            <Link to="/men" style={linkStyle}>
              Men
            </Link>
          </p>
          <p className="links-hover">
            <Link to="/women" style={linkStyle}>
              Women
            </Link>
          </p>
          <p className="links-hover">
            <Link to="/about" style={linkStyle}>
              About
            </Link>
          </p>
          <p className="links-hover">
            <Link to="/contact" style={linkStyle}>
              Contact
            </Link>
          </p>
        </div>
        <div>
          <img src={emptyCart} alt="" className="cart" />
          <Link to="/detailPage">
            <img src={avatar} alt="" className="avatar" />
          </Link>
        </div>
      </nav>
    </>
  );
}
