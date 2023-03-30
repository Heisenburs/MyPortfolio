import React from "react";
import Logo from "../components/Logo";
// import { useState, useEffect } from "react";

function Homepage() {
  return (
    <div>
      <h2>Homepage</h2>
      {/* couldnt get file for download button */}
      <a href="public/JadaBurs-Resume.pdf" download="Jada Burs - Resume">
        Resume
      </a>
      <Logo />
    </div>
  );
}

export default Homepage;
