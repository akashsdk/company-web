import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import Footer from "../Components/Footer";

import { Link } from "react-router-dom";

export default function AboutUs() {
  
  return (
    <div className="AppBody">
      <div className="About-Body">
        <div>about us</div>
      </div>
      <Footer />
    </div>
  );
}
