import React, { useState, useEffect } from "react";
import "./Career.css";
import Footer from "../Components/Footer";

export default function Career() {
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
      <div className="Career-Body">
        <p>Career</p>
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
