import React from "react";
import Logo from "../components/Logo";
import { useState, useEffect } from "react";
import Quote from "../components/Quote";

import ResumeButton from "../components/ResumeButton";

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
      {quote && <Quote quote={quote} />}

      <ResumeButton />

      <Logo />
    </div>
  );
}

export default Homepage;
