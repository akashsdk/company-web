import React, { useState } from "react";
import "./AboutUs.css";
import Footer from "../Components/Footer";

export default function AboutUs() {
  const [page, setPage] = useState(1);
  return (
    <div className="AppBody">
      <div className="About-Body">
        <h1>AboutUs</h1>

        {page === 1 ? (
          <div
            style={{
              height: "100px",
              width: "300px",
              border: "1px solid black",
            }}
          >
            box1
          </div>
        ) : page === 2 ? (
          <div
            style={{
              height: "100px",
              width: "300px",
              border: "1px solid black",
            }}
          >
            box2
          </div>
        ) : page === 3 ? (
          <div
            style={{
              height: "100px",
              width: "300px",
              border: "1px solid black",
            }}
          >
            box3
          </div>
        ) : page === 4 ? (
          <div
            style={{
              height: "100px",
              width: "300px",
              border: "1px solid black",
            }}
          >
            box4
          </div>
        ) : (
          <p>hgygy</p>
        )}

        <button
          style={{
            borderColor: "red",
            backgroundColor: page === 1 ? "red" : "",
          }}
          onClick={() => {
            setPage(1);
          }}
        >
          Box1
        </button>
        <button
          style={{
            borderColor: "red",
            backgroundColor: page === 2 ? "red" : "",
          }}
          onClick={() => {
            setPage(2);
          }}
        >
          Box2
        </button>
        <button
          style={{
            borderColor: "red",
            backgroundColor: page === 3 ? "red" : "",
          }}
          onClick={() => {
            setPage(3);
          }}
        >
          Box3
        </button>
        <button
          style={{
            borderColor: "red",
            backgroundColor: page === 4 ? "red" : "",
          }}
          onClick={() => {
            setPage(4);
          }}
        >
          Box4
        </button>

        <Footer />
      </div>
    </div>
  );
}
