import React, { useState, useEffect } from "react";
import "./Career.css";
import Footer from "../Components/Footer";

export default function Career() {
  return (
    <div className="AppBody">
      <div className="Career-Body">
        <div className="Career-Box1">
          <div className="Career-Box1-Left">
            <p className="Career-Box1Left-text1">Join with us</p>
            <p className="Career-Box1Left-text2">
              {" "}
              Be a part of super talented team in the fastest growing software
              development company!
            </p>
            <p className="Career-Box1Left-text3">
              Join our team as a software engineer and experience a dynamic work
              environment with opportunities for growth. Be part of a passionate
              and cohesive team delivering innovative software solutions.
            </p>
            <button className="Career-Box1Left-Button"> 
              <p className="Career-Box1Left-text4">Apply Now</p>
            </button>
          </div>
          <div className="Career-Box1-Right">Right</div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
