import React from "react";

function Homepage() {
  return (
    <div>
      <h2>Homepage</h2>
      {/* couldnt get file for download button */}
      <a href="public\JadaBurs-Resume.pdf" download="Jada Burs - Resume">
        Resume
      </a>
      <img src="" alt="logo" width="50px" height="50px" />
    </div>
  );
}

export default Homepage;
