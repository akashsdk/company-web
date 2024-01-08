import React from "react";
import "./SoftwareService.css";

export default function SoftwareService(props) {
  return (
    <div className="SoftwareService-Body">
      <img className="SoftwareService-Icon" src={props.img} alt="" />
      <div className="SoftwareService-div">
        <p className="SoftwareService-Text1">{props.text1}</p>
        <p className="SoftwareService-Text2">{props.text2}</p>
      </div>
    </div>
  );
}
