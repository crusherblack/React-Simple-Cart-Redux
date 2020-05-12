import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <Link to="/" className="nav-item nav-link text-light font-weight-bold">
          Shopping
        </Link>
        <Link to="/cart" className="nav-item nav-link text-light">
          My Cart
        </Link>
      </nav>
    </div>
  );
}
