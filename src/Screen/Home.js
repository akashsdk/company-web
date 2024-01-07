import React from "react";
import "./Home.css";
import { FloatButton } from "antd";

import HomeAnimation from "../Components/HomeAnimation";

import img1 from "../Image/We-Deploy-World.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-Body">
      <div className="homeBody">
        {/* <HomeAnimation/> */}
        <div className="homeMain-Body">
          <div className="homeMain-Left">
            <p>Offshore Software Development 🙌</p>
            <p>We Deploy World Class Agile Product Teams on Demand</p>
            <p>
              Vivasoft specializes in providing custom software development
              services. Get premium software solutions from a reliable
              outsourcing partner and set your business apart. Skilled teams
              that can design, build, space and scale your vision in the most
              efficient way.
            </p>
            <div>
              <div>
                <p>3+</p>
                <p>Years of experience</p>
              </div>

              <div>
                <p>10+</p>
                <p>Dedicated Engineers</p>
              </div>

              <div>
                <p>11+</p>
                <p>Successful Projects</p>
              </div>
            </div>
            <Link>
              <p>Hire Developers</p>
            </Link>
          </div>
          <div className="homeMain-Right">
            <img className="homeMain-Right-Img" src={img1} alt="SVG" />
          </div>
        </div>
      </div>
    </div>
  );
}
