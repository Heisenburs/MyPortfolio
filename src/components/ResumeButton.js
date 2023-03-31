import React from "react";
import { Button } from "react-bootstrap";
import pdf from "../assets/JadaBurs-Resume.pdf";

function ResumeButton() {
  return (
    <div>
      <Button
        className="button-54"
        role="button"
        type="button"
        value="download"
        href={pdf}
        download={pdf}
      >
        Resume
      </Button>
    </div>
  );
}

export default ResumeButton;
