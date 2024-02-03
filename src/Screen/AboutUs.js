import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import Footer from "../Components/Footer";

import { Link } from "react-router-dom";

export default function AboutUs() {
  const storedColors = localStorage.getItem("selectedTextColors");
  const [textColors, setTextColors] = useState(
    storedColors ? JSON.parse(storedColors) : ["black", "black", "black", "black", "black"]
  );

  const handleTextClick = (index) => {
    const updatedColors = textColors.map((_, i) =>
      i === index ? "red" : "black"
    );
    setTextColors(updatedColors);
    localStorage.setItem("selectedTextColors", JSON.stringify(updatedColors));
  };

  useEffect(() => {
    localStorage.setItem("selectedTextColors", JSON.stringify(textColors));
  }, [textColors]);
  return (
    <div className="AppBody">
      <div className="About-Body">
        <div>
          <div className="headerBox-2-Box">
            <Link
              to="/"
              className="headerBox-2-Link"
              onClick={() => handleTextClick(0)}
            >
              <p className={`headerBox-2-Text ${textColors[0]}`}>Home</p>
            </Link>
          </div>

          <div className="headerBox-2-Box">
            <Link
              to="/career"
              className="headerBox-2-Link"
              onClick={() => handleTextClick(2)}
            >
              <p className={`headerBox-2-Text ${textColors[2]}`}>Career</p>
            </Link>
          </div>

          <div className="headerBox-2-Box">
            <Link
              to="/blog"
              className="headerBox-2-Link"
              onClick={() => handleTextClick(3)}
            >
              <p className={`headerBox-2-Text ${textColors[3]}`}>Blog</p>
            </Link>
          </div>

          <div className="headerBox-2-Box">
            <Link
              to="/about-us"
              className="headerBox-2-Link"
              onClick={() => handleTextClick(4)}
            >
              <p className={`headerBox-2-Text ${textColors[4]}`}>About Us</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
