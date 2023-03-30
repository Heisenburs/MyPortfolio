import React from "react";
function Contact() {
  return (
    <div>
      <h3>Contact</h3>

      <button>
        <a href="public/JadaBurs-Resume.pdf" download="Jada Burs - Resume">
          Resume
        </a>
      </button>
      <form action="">
        <div>
          <label>Name: </label>
          <input type="text" name="name" id="name" required></input>
        </div>

        <div>
          <label>Email: </label>
          <input type="text" name="email" id="email" required></input>
        </div>

        <div>
          <label>Tell me a little about the project... </label>
          <input
            type="textarea"
            rows="5"
            cols="20"
            name="request"
            id="request"
            required
          ></input>
        </div>

        <div>
          <input type="submit" name="send" id="send" required></input>
        </div>
      </form>

      <a href="https://github.com/Heisenburs" target="_blank" rel="noreferrer">
        Github
      </a>

      <a
        href="https://www.linkedin.com/in/jada-burs/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </div>
  );
}

export default Contact;
