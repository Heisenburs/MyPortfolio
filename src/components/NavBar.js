import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/">
        <div>
          <h1>Jada Burs</h1>
        </div>
      </Link>
      <Link to="/about">
        <div>
          <h6>.01</h6>
        </div>
      </Link>
      <Link to="/works">
        <div>
          <h6>.02</h6>
        </div>
      </Link>
      <Link to="/contact">
        <div>
          <h6>.03</h6>
        </div>
      </Link>
    </nav>
  );
}

export default NavBar;
