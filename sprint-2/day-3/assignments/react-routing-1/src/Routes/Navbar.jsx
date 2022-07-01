import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link style={{ textDecoration: "none" }} to={"/"}>
          Home
        </Link>
      </div>
      <div>
        <Link style={{ textDecoration: "none" }} to={"/products"}>
          All Products
        </Link>
      </div>
    </div>
  );
};
