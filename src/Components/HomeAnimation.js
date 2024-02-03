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
        4 Things to Consider When Designing and Developing a Website
        </p>
        <p className="Animation-Text2">
          Our company specializes in software outsourcing and provides robust,
          scalable, and efficient solutions to clients around the world. We are
          committed to providing quality services at competitive prices. Our
          goal is to help our clients achieve their business objectives by
          providing them with the best possible software solutions.
        </p>
        <div className="Animation-Box2">
          <div className="Animation-Box">
            <div className="Animation-Box-Left">
              <div className="Animation-ImgDiv">
                <img className="Animation-Img" src={Img4} alt="" />
              </div>
              <p className="Animation-Text3">Creative Design</p>
              <p className="Animation-Text4">
                "Discover the artistry of our software solutions at [Your
                Company Name]. Our creative design services redefine digital
                experiences, seamlessly integrating aesthetics with
                functionality. Elevate your brand with bespoke designs that
                captivate and engage. From user-friendly interfaces to unique
                branding, we tailor each project to exceed expectations. At
                [Your Company Name], we blend innovation with precision,
                delivering software solutions that not only meet but exceed
                client aspirations. Experience a new realm of creative design
                with our expert team."
              </p>
              <Link to="/contacts" className="Animation-Link">
                <p className="Animation-Text5">Contact Us</p>
                <ArrowRightOutlined className="Animation-Icon" />
              </Link>
            </div>

            <div className="Animation-Box-Right">
              <div className="Animation-ImgDiv2">
                <img className="Animation-Img2" src={Img1} alt="" />
              </div>
              <p className="Animation-Text3">Flexible Design</p>
              <p className="Animation-Text4">
                "Embrace adaptability with our innovative approach to Flexible
                Design at [Your Company Name]. Our small IT company is dedicated
                to crafting top-tier, client-centric software solutions marked
                by unparalleled flexibility. We understand the dynamic nature of
                businesses, and our team excels in creating designs that
                seamlessly adjust to evolving needs. From scalable interfaces to
                versatile applications, we prioritize flexibility in every
                project, ensuring your software not only meets current
                requirements but easily accommodates future enhancements. At
                [Your Company Name], we redefine flexibility, providing software
                solutions that grow with your business, setting the foundation
                for sustained success in the ever-changing digital landscape."
              </p>
              <Link to="/contacts" className="Animation-Link">
                <p className="Animation-Text5">Contact Us</p>
                <ArrowRightOutlined className="Animation-Icon" />
              </Link>
            </div>
          </div>

          <div className="Animation-Box">
            <div className="Animation-Box-Right">
              <div className="Animation-ImgDiv2">
                <img className="Animation-Img2" src={Img3} alt="" />
              </div>
              <p className="Animation-Text3">Responsive Design</p>
              <p className="Animation-Text4">
                "At [Your Company Name], we redefine digital experiences through
                Responsive Design. Our small IT company takes pride in
                delivering high-quality software with an unwavering focus on
                responsiveness. Seamlessly adapting to various devices and
                screen sizes, our designs ensure optimal user experiences. From
                intuitive interfaces to adaptive applications, we prioritize
                responsiveness in crafting solutions that engage users across
                platforms. At the heart of our approach lies a commitment to
                dynamic and fluid design principles. Join us in navigating the
                digital landscape with software that effortlessly responds to
                the evolving needs of your audience. Elevate your brand with our
                responsive design expertise."
              </p>
              <Link to="/contacts" className="Animation-Link">
                <p className="Animation-Text5">Contact Us</p>
                <ArrowRightOutlined className="Animation-Icon" />
              </Link>
            </div>

            <div className="Animation-Box-Left">
              <div className="Animation-ImgDiv">
                <img className="Animation-Img" src={Img2} alt="" />
              </div>
              <p className="Animation-Text3">Clean Design</p>
              <p className="Animation-Text4">
                "At [Your Company Name], we specialize in crafting software with
                a commitment to Clean Design. Our small IT company places
                emphasis on minimalist and user-friendly interfaces, ensuring an
                immersive and clutter-free experience for clients. From sleek
                applications to intuitive user journeys, we prioritize
                simplicity in design, enhancing usability and leaving a lasting
                impression. Experience the elegance of our solutions, where
                every line of code contributes to a clean and sophisticated user
                interface, setting the benchmark for quality software at [Your
                Company Name]."
              </p>
              <Link to="/contacts" className="Animation-Link">
                <p className="Animation-Text5">Contact Us</p>
                <ArrowRightOutlined className="Animation-Icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
