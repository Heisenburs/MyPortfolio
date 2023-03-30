import React from "react";
import Logo from "../components/Logo";
import { useState, useEffect } from "react";
import Quote from "../components/Quote";
import pdf from "../assets/JadaBurs-Resume.pdf";
import logo from "../assets/logo-nobg.png";

function Homepage() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.kanye.rest/");

        const data = await response.json();
        console.log(data);
        setQuote(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Homepage</h2>
      {quote && <Quote quote={quote} />}

      <button>
        <a href={pdf} download={pdf}>
          Resume
        </a>
      </button>

      <Logo />
    </div>
  );
}

export default Homepage;
