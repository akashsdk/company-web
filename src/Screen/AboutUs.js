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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div className="AppBody">
      <div>
        <button onClick={openDrawer}>Open Drawer</button>

        {isDrawerOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "350px",
                backgroundColor: "#f0f0f0",
                position: "absolute",
                left: isDrawerOpen ? "0" : "-100%",
                transition: "left 0.5s",
              }}
            >
              {/* Drawer content goes here */}
              <p>Your drawer content goes here!</p>
              <button onClick={closeDrawer}>Close Drawer</button>
            </div>
          </div>
        )}
      </div>

      <div className="About-Body">
        <h1>AboutUs</h1>
        <a
            style={{ textDecoration: "none" }}
            href="https://www.facebook.com/tasnimSakash/"
            target="_blank"
          >jhbggg
          </a>

        <p>
          1. Your Mission 2. Your Story (History) 3. Your Services (And
          Benefits) 4. Your Social Proof 5.
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
