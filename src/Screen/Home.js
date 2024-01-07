import React from "react";
import "./Home.css";
import { FloatButton } from "antd";

import HomeAnimation from "../Components/HomeAnimation";
import SoftwareService from "../Cart/SoftwareService";

import img1 from "../Image/We-Deploy-World.png";
import img2 from "../Image/pngtree-blue-removebg-preview (1).png";

import icon1 from "../Icon/computer.png";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-Body">
      <div className="homeBody">
        <HomeAnimation />
        {/* Main-Body */}
        {/* <div className="homeMain-Body">
          <div className="homeMain-Left">
            <p className="homeMain-Left-Text1">Offshore Software Development 🙌</p>
            <p className="homeMain-Left-Text2">We Deploy World Class Agile Product Teams on Demand</p>
            <p className="homeMain-Left-Text3">
              Vivasoft specializes in providing custom software development
              services. Get premium software solutions from a reliable
              outsourcing partner and set your business apart. Skilled teams
              that can design, build, space and scale your vision in the most
              efficient way.
            </p>
            <div className="homeMain-Left-Box1">
              <div >
                <p className="homeMain-Left-Text4">3+</p>
                <img className="homeMain-Left-Img" src={img2} alt=""/>
                <p className="homeMain-Left-Text5">Years of experience</p>
              </div>

              <div className="homeMain-Left-Box2">
                <p className="homeMain-Left-Text4">10+</p>
                <img className="homeMain-Left-Img" src={img2} alt=""/>
                <p className="homeMain-Left-Text5">Dedicated Engineers</p>
              </div>

              <div className="homeMain-Left-Box2">
                <p className="homeMain-Left-Text4">11+</p>
                <img className="homeMain-Left-Img" src={img2} alt=""/>
                <p className="homeMain-Left-Text5">Successful Projects</p>
              </div>
            </div>
            <Link to='/Contacts' className="homeMain-Left-Link">
              <p className="homeMain-Left-Text6">Hire Developers</p>
            </Link>
          </div>
          <div className="homeMain-Right">
            <img className="homeMain-Right-Img" src={img1} alt="SVG" />
          </div>
        </div> */}

        {/* SoftwareService-Part */}
        <div className="home-Part-Box">
          <div className="home-Part-Div">
            <p className="home-Part-Text1">Most Effective Software Development Outsourcing Service</p>
            <p className="home-Part-Text2">
              As your software development partner, we are committed to helping
              you establish long-term business relationships. We offer a variety
              of outsourcing services that can be tailored to your specific
              needs. Our team of experts has extensive experience in all aspects
              of software development, from enterprise applications to mobile
              apps and everything in between.
            </p>
          </div>
          <div style={{width:'100%'}}>
            <SoftwareService
              img={icon1}
              text1="Scalable System Design"
              text2="High-performing product giving you a tailored solution for your business."
            />
            <SoftwareService img={img1} text1="Compuerr" text2="Fahim" />
          </div>
        </div>
      </div>
    </div>
  );
}
