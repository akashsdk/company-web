import React from "react";
import "./HomeAnimation.css";

import Img1 from "../Image/web Pic 2.png";
import Img2 from "../Image/web Pic 3 copy.jpg";
import Img3 from "../Image/web Pic 4.png";
import Img4 from "../Image/web Pic 5 copy.jpg";

import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function HomeAnimation() {
  return (
    <div className="h-AnimationBody">
      <div style={{ height: "20px" }} />
      <div className="Animation-Div">
        <p className="Animation-Text1">
          Our Custom Software Development Products for Partners
        </p>
        <p className="Animation-Text2">
          Our company specializes in software outsourcing and provides robust,
          scalable, and efficient solutions to clients around the world. We are
          committed to providing quality services at competitive prices. Our
          goal is to help our clients achieve their business objectives by
          providing them with the best possible software solutions.
        </p>

        <div className="Animation-Box">
          <div className="Animation-Box-Left">
            <div className="Animation-ImgDiv">
              <img className="Animation-Img" src={Img4} alt="" />
            </div>
            <p className="Animation-Text3">Name</p>
            <p className="Animation-Text4">Detels</p>
            <Link className="Animation-Link">
              <p className="Animation-Text5">Contact Us</p>
              <ArrowRightOutlined className="Animation-Icon" />
            </Link>
          </div>
          <div className="Animation-Box-Right">Right</div>
        </div>
      </div>
    </div>
  );
}
