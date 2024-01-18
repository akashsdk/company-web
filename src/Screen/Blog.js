import React from "react";
import "./Blog.css";
import Footer from "../Components/Footer";

import { Image } from "antd";

import photo1 from '../Image/Profile.jpg';

export default function Blog() {
  return (
    <div className="AppBody">
      <div className="Blog-Body">
        {/* Part-1 */}
        <div className="blogPart1-Body">
          <div className="blogPart1-left">
            <p className="blogPart1-text1">MESSAGE FROM THE CHAIRMAN</p>
            <div className="blogPart1-div">
              <Image className="blogPart1-img" src={photo1} />
            </div>
          </div>
          <div className="blogPart1-right">right</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
