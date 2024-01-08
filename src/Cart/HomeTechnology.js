import React from "react";
import "./HomeTechnology.css";

export default function HomeTechnology(props) {
  return (
    <div className="HomeTech-Body">
      <img className="HomeTech-Imag" src={props.img} alt="" />
      <p style={{fontSize:'30px', color:''}}>{props.text}</p>
    </div>
  );
}
