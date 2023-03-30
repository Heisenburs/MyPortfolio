import React from "react";
function Contact() {
  return (
    <div>
      <h3>Contact</h3>

      <button>Resume</button>
      <form action="">
        <div>
          <label>Name</label>
          <input type="text" name="name" id="name" required></input>
        </div>

        <div>
          <label>Email</label>
          <input type="text" name="email" id="email" required></input>
        </div>

        <div>
          <label>What are you looking for?</label>
          <input type="checkbox" name="" id="" required></input>
        </div>

        <div>
          <input type="submit" name="send" id="send" required></input>
        </div>
      </form>
    </div>
  );
}

export default Contact;
