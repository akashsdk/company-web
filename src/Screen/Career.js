import React, { useState, useEffect } from "react";
import "./Career.css";
import Footer from "../Components/Footer";
import SoftwareService from "../Cart/SoftwareService";

import img1 from "../Image/we-are-hiring.png";
import img2 from "../Image/why join with us.png";

import icon1 from "../Icon/Flexible Time.png";
import icon2 from "../Icon/Knowledge Share.png";
import icon3 from "../Icon/career-promotion.png";
import icon4 from "../Icon/protect.png";
import icon5 from "../Icon/Insurance.png";
import icon6 from "../Icon/inspiration.png";

import { ArrowRightOutlined, EnvironmentOutlined } from "@ant-design/icons";

export default function Career() {
  const [activeBox, setActiveBox] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBox((prevBox) => (prevBox % 3) + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="AppBody">
      <div className="Career-Body">
        {/* part-1 */}
        <div className="Career-Box1">
          <div className="Career-Box1-Left">
            <p className="Career-Box1Left-text1">Join with us</p>
            <p className="Career-Box1Left-text2">
              {" "}
              Be a part of super talented team in the fastest growing software
              development company!
            </p>
            <p className="Career-Box1Left-text3">
              Join our team as a software engineer and experience a dynamic work
              environment with opportunities for growth. Be part of a passionate
              and cohesive team delivering innovative software solutions.
            </p>
            <button className="Career-Box1Left-Button">
              <p className="Career-Box1Left-text4">Apply Now</p>
            </button>
          </div>
          <div className="Career-Box1-Right">
            <img className="Career-Box1Right-Img" src={img1} alt="" />
          </div>
        </div>

        {/* part-2 */}
        <div className="Career-Box2">
          <div className="Career-Box2-Left">
            <img className="Career-Box2Left-Img" src={img2} alt="" />
          </div>
          <div className="Career-Box2-Right">
            <p className="Career-Box2Left-text1">Why! Join with us?</p>
            <p className="Career-Box2Left-text2">
              If you are looking for a company that values creativity,
              innovation, and collaboration, then 'web site name' is the place
              for you. We offer a dynamic work environment that promotes
              professional growth and encourages individuals to challenge
              themselves. Our team is composed of talented individuals from
              diverse backgrounds who are committed to creating exceptional
              software solutions for our clients. By joining 'web site name',
              you will have the opportunity to work with cutting-edge
              technologies, collaborate with a talented team of professionals,
              and make a meaningful impact in the industry.
            </p>
          </div>
        </div>

        {/* part-3 */}
        <div className="Career-Box3">
          <p className="Career-Box3-text1">Open Position</p>
          <p className="Career-Box3-text2">
            We have challenging projects for gifted professionals. Let’s create
            great products together!
          </p>

          <div className="careerBox3">
            <div className="careerBox-slider">
              <div
                className={`careerBox ${
                  activeBox === 1 ? "center" : "center2"
                }`}
              >
                {activeBox === 1 ? (
                  <div className="careerBox3-Box">
                    <p className="careerBox3-text1">Senior Node.js Developer</p>

                    <div className="careerBox3-Box2">
                      <EnvironmentOutlined className="careerBox3-Icon1" />
                      <p className="careerBox3-text2">Remote</p>
                      <p className="careerBox3-text3">Exp: 3+ Years</p>
                    </div>
                    <button className="careerBox3-button">
                      <p className="careerBox3-text4">Apply Now</p>
                      <ArrowRightOutlined className="careerBox3-Icon2" />
                    </button>
                  </div>
                ) : (
                  <p className="careerBox3-text5">Senior Node.js Developer</p>
                )}
              </div>
              <div
                className={`careerBox ${
                  activeBox === 2 ? "center" : "center2"
                }`}
              >
                {activeBox === 2 ? (
                  <div className="careerBox3-Box">
                    <p className="careerBox3-text1">
                      Senior Software Engineer (MERN)
                    </p>

                    <div className="careerBox3-Box2">
                      <EnvironmentOutlined className="careerBox3-Icon1" />
                      <p className="careerBox3-text2">Remote</p>
                      <p className="careerBox3-text3">Exp: 4+ Years</p>
                    </div>
                    <button className="careerBox3-button">
                      <p className="careerBox3-text4">Apply Now</p>
                      <ArrowRightOutlined className="careerBox3-Icon2" />
                    </button>
                  </div>
                ) : (
                  <p className="careerBox3-text5">
                    Senior Software Engineer (MERN)
                  </p>
                )}
              </div>
              <div
                className={`careerBox ${
                  activeBox === 3 ? "center" : "center2"
                }`}
              >
                {activeBox === 3 ? (
                  <div className="careerBox3-Box">
                    <p className="careerBox3-text1">Senior UX & UI Designer</p>

                    <div className="careerBox3-Box2">
                      <EnvironmentOutlined className="careerBox3-Icon1" />
                      <p className="careerBox3-text2">Remote</p>
                      <p className="careerBox3-text3">Exp: 2+ Years</p>
                    </div>
                    <button className="careerBox3-button">
                      <p className="careerBox3-text4">Apply Now</p>
                      <ArrowRightOutlined className="careerBox3-Icon2" />
                    </button>
                  </div>
                ) : (
                  <p className="careerBox3-text5">Senior UX & UI Designer </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* part-4 */}
        <div className="Career-Box4">
          <p className="Career-Box3-text1">Benefits and Opportunities</p>
          <p className="Career-Box3-text2">
            At 'web site name', we believe in empowering our team to reach their
            full potential. We offer a rich array of benefits and opportunities
            for professional and personal growth.
          </p>

          <div className="Career-Box4-Flex">
            <SoftwareService img={icon1} text1="Flexible Time" text2="" />
            <SoftwareService img={icon2} text1="Knowledge Share" text2="" />
            <SoftwareService img={icon3} text1="Growth Opportunity" text2="" />
          </div>

          <div className="Career-Box4-Flex">
            <SoftwareService img={icon6} text1="Inspiring Culture" text2="" />
            <SoftwareService img={icon5} text1="Yearly Bonuses" text2="" />
            <SoftwareService img={icon4} text1="Life Insurance" text2="" />
          </div>
        </div>

        {/* part-4 */}
        <div className="Career-Box5">
          <p className="Career-Box3-text1">How to Join Our Dynamic Team</p>
          <p className="Career-Box3-text2">
            Become a part of the (web site name) family through our thorough
            4-step hiring process.
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
}
