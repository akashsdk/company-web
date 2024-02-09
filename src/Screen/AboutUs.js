import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import Footer from "../Components/Footer";

import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="AppBody">
      <div className="About-Body">

        <div className="about-us-container">
          <div className="about-us-header">
            <h1>About ABCode</h1>
          </div>

          <div className="about-us-content">
            <p>
              Welcome to ABCode, your premier destination for bespoke software
              solutions. At ABCode, we take pride in our commitment to
              delivering high-quality software tailored to the unique
              requirements of our clients.
            </p>

            <p>
              Our journey is marked by a passion for innovation and a dedication
              to excellence. With a team of skilled professionals, we strive to
              redefine the boundaries of technological possibilities.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to empower businesses through cutting-edge
              technology. We endeavor to provide customized software solutions
              that not only meet but exceed the expectations of our clients. Our
              goal is to contribute to the success and growth of your business.
            </p>

            {/* Add more content as needed */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
