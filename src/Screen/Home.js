import React from "react";
import "./Home.css";
import { FloatButton } from "antd";

import HomeAnimation from "../Components/HomeAnimation";
import SoftwareService from "../Cart/SoftwareService";

import img1 from "../Image/We-Deploy-World.png";
import img2 from "../Image/pngtree-blue-removebg-preview (1).png";

import icon1 from "../Icon/computer.png";
import icon2 from "../Icon/cloud-computing.png";
import icon3 from "../Icon/reliability.png";
import icon4 from "../Icon/data.png";
import icon5 from "../Icon/data-server.png";
import icon6 from "../Icon/settings.png";
import icon7 from "../Icon/application.png";
import icon8 from "../Icon/ux-design.png";
import icon9 from "../Icon/assurance.png";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-Body">
      <div className="homeBody">
        {/* HomeAnimation-Part */}
        <HomeAnimation />

        {/* Main-Body */}
        <div className="homeMain-Body">
          <div className="homeMain-Left">
            <p className="homeMain-Left-Text1">
              Offshore Software Development 🙌
            </p>
            <p className="homeMain-Left-Text2">
              We Deploy World Class Agile Product Teams on Demand
            </p>
            <p className="homeMain-Left-Text3">
              'Web Name' specializes in providing custom software development
              services. Get premium software solutions from a reliable
              outsourcing partner and set your business apart. Skilled teams
              that can design, build, space and scale your vision in the most
              efficient way.
            </p>
            <div className="homeMain-Left-Box1">
              <div>
                <p className="homeMain-Left-Text4">3+</p>
                <img className="homeMain-Left-Img" src={img2} alt="" />
                <p className="homeMain-Left-Text5">Years of experience</p>
              </div>

              <div className="homeMain-Left-Box2">
                <p className="homeMain-Left-Text4">10+</p>
                <img className="homeMain-Left-Img" src={img2} alt="" />
                <p className="homeMain-Left-Text5">Dedicated Engineers</p>
              </div>

              <div className="homeMain-Left-Box2">
                <p className="homeMain-Left-Text4">11+</p>
                <img className="homeMain-Left-Img" src={img2} alt="" />
                <p className="homeMain-Left-Text5">Successful Projects</p>
              </div>
            </div>
            <Link to="/Contacts" className="homeMain-Left-Link">
              <p className="homeMain-Left-Text6">Hire Developers</p>
            </Link>
          </div>
          <div className="homeMain-Right">
            <img className="homeMain-Right-Img" src={img1} alt="SVG" />
          </div>
        </div>

        {/* SoftwareService-Part */}
        <div className="home-Part-Box">
          <div className="home-Part-Div">
            <p className="home-Part-Text1">
              Most Effective Software Development Outsourcing Service
            </p>
            <p className="home-Part-Text2">
              As your software development partner, we are committed to helping
              you establish long-term business relationships. We offer a variety
              of outsourcing services that can be tailored to your specific
              needs. Our team of experts has extensive experience in all aspects
              of software development, from enterprise applications to mobile
              apps and everything in between.
            </p>
          </div>
          <div className="home-Part-Flex">
            <div className="home-Part-FlexDiv">
              <SoftwareService
                img={icon1}
                text1="Scalable System Design"
                text2="High-performing product giving you a tailored solution for your business."
              />
              <SoftwareService
                img={icon2}
                text1="Cloud Services"
                text2="Cloud outsourcing provider managed cloud services for businesses."
              />
              <SoftwareService
                img={icon3}
                text1="DevOps Services"
                text2="DevOps consulting services based on modern tools & technologies."
              />
            </div>
            <div className="home-Part-FlexDiv">
              <SoftwareService
                img={icon4}
                text1="Big Data & Data Science"
                text2="Drive business transformation through data analytics."
              />
              <SoftwareService
                img={icon5}
                text1="Database Management"
                text2="DBMS establish the relationship between datasets, and how users interact with them."
              />
              <SoftwareService
                img={icon6}
                text1="Embedded System Design"
                text2="Provide high-quality embedded system design and embedded architecture design services."
              />
            </div>
            <div className="home-Part-FlexDiv">
              <SoftwareService
                img={icon7}
                text1="Mobile Application Dev"
                text2="We build your apps for all the devices out there."
              />
              <SoftwareService
                img={icon8}
                text1="UX Design"
                text2="UX design ensures the quality of user journey of your digital products and services."
              />
              <SoftwareService
                img={icon9}
                text1="SQA"
                text2="Software test lifecycle services, from test planning to execution and everything in between."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
