import React from "react";
import "./ServicesCart.css";
import "../Screen/Home.css";
import { Link } from "react-router-dom";

import img1 from "../Image/team-works.png";
import img2 from "../Image/Work-removebg-preview.png";

export default function ServicesCart(props) {
  return (
    <div className="ServicesCart-Body">
      <div className="homeMain-Body">
        <div className="homeMain-Left">
          <p className="homeMain-Left-Text1"> {props.text1} 🙌</p>
          <p className="homeMain-Left-Text2">{props.text2}</p>
          <p className="homeMain-Left-Text3">{props.text3}</p>

          <Link to="/Contacts" className="homeMain-Left-Link">
            <p className="homeMain-Left-Text6">Hire Developers</p>
          </Link>
        </div>
        <div className="homeMain-Right">
          <img className="homeMain-Right-Img" src={img1} alt="SVG" />
        </div>
      </div>
      <div className="home-Part-Div">
        <p className="home-Part-Text1">{props.text4}</p>
        <p className="home-Part-Text2">{props.text5}</p>
      </div>
      <div className="ServicesCart-Box">
        <div className="homeMain-Left">
          <p className="ServicesCart-Text1"> {props.text6} </p>
          <p className="ServicesCart-Text2">{props.text7}</p>
        </div>
        <div className="homeMain-Right">
          <img className="homeMain-Right-Img" src={img2} alt="SVG" />
        </div>
      </div>
    </div>
  );
}
