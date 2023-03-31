import React from "react";
import { Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Nav className="flex-column verticalnav">
      <Nav.Link href="/" className="navlink">
        <div>
          <h1>Jada Burs</h1>
        </div>
      </Nav.Link>
      <Nav.Link href="/about" className="navlink">
        <div>
          <h6>.01</h6>
        </div>
      </Nav.Link>
      <Nav.Link href="/works" className="navlink">
        <div>
          <h6>.02</h6>
        </div>
      </Nav.Link>
      <Nav.Link href="/contact" className="navlink">
        <div>
          <h6>.03</h6>
        </div>
      </Nav.Link>
    </Nav>
  );
}

export default NavBar;

// return (
//   <Nav defaultActiveKey="/home" className="flex-column">
//     <Nav.Link href="/home">Active</Nav.Link>
//     <Nav.Link eventKey="link-1">Link</Nav.Link>
//     <Nav.Link eventKey="link-2">Link</Nav.Link>
//   </Nav>
// );
