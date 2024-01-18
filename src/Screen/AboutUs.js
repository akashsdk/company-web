import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import Footer from "../Components/Footer";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasBoxBeenShown = localStorage.getItem("hasBoxBeenShown");

    if (!hasBoxBeenShown) {
      setIsVisible(true);
    }
  }, []);
  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("hasBoxBeenShown", "true");
  };
  return (
    <div className="AppBody">
      <div className="About-Body">
        <h1>AboutUs</h1>

        <p>1. Your Mission

          2. Your Story (History)
          3. Your Services (And Benefits)
          4. Your Social Proof
          5. 
        </p>
        {isVisible && (
          <div>
            <p>This is the box content</p>
            <button onClick={handleClose}>Close</button>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}
