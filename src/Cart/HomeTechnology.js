import React from "react";
import "./HomeTechnology.css";

export default function HomeTechnology(props) {
    const { color } = props;
  return (
    <div className="HomeTech-Body">
      <img className="HomeTech-Imag" src={props.img} alt="" />
      <p className="HomeTech-Text" style={{ color: color}}>{props.text}</p>
    </div>
  );
}
