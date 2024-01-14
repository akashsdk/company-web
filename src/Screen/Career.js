import React, { useState, useEffect } from "react";
import "./Career.css";
import Footer from "../Components/Footer";

import img1 from "../Image/we-are-hiring.png";
import img2 from "../Image/why join with us.png";

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

        <div className="Career-Box3">
          <p className="Career-Box3-text1">Open Position</p>
          <p className="Career-Box3-text2">
            We have challenging projects for gifted professionals. Let’s create
            great products together!
          </p>

          <div className="careerBox3">
          <div className="careerBox-slider">
      <div className={`careerBox ${activeBox === 1 ? 'center' : 'center2'}`}>Box 1</div>
      <div className={`careerBox ${activeBox === 2 ? 'center' : 'center2'}`}>Box 2</div>
      <div className={`careerBox ${activeBox === 3 ? 'center' : 'center2'}`}>Box 3</div>
    </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
