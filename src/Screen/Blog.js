import React from "react";
import "./Blog.css";
import Footer from "../Components/Footer";

import { Image } from "antd";

import photo1 from "../Image/Profile.jpg";

export default function Blog() {
  return (
    <div className="AppBody">
      <div className="Blog-Body">
        {/* Part-1 */}
        <p className="blogPart1-text1">MESSAGE FROM THE CHAIRMAN</p>
        <div className="blogPart1-Body">
          <div className="blogPart1-div1">
            <div className="blogPart1-div">
              <Image className="blogPart1-img" src={photo1} />
            </div>
          </div>
          <p className="blogPart1-text2">Tasnim Shahriar Akash</p>
          <p className="blogPart1-text3">
            Dear Valued Clients, <br /> <br />
            I am delighted to extend a warm welcome to you on behalf of our
            dynamic team at [Your Company Name], where innovation meets
            excellence. As the Chairman of this esteemed software company, it is
            my privilege to connect with each and every one of you. <br />{" "}
            <br />
            At [Your Company Name], we are driven by a commitment to deliver
            cutting-edge solutions that transcend expectations. We understand
            that in today's rapidly evolving digital landscape, your needs are
            unique, and we are dedicated to crafting bespoke software solutions
            tailored to meet and exceed those needs. <br /> <br />
            Our journey is guided by a passion for innovation, a commitment to
            quality, and a relentless pursuit of customer satisfaction. We
            believe in the transformative power of technology and its ability to
            simplify complexities, empower businesses, and elevate user
            experiences. <br /> <br />
            As we continue to pioneer advancements in the software industry, we
            invite you to embark on this journey with us. Your success is our
            success, and we are devoted to fostering enduring partnerships that
            stand the test of time. Whether you are a seasoned partner or
            exploring our offerings for the first time, we are here to serve you
            with unwavering dedication. <br /> <br />
            Thank you for choosing [Your Company Name]. We look forward to
            contributing to your success and creating a future shaped by
            innovation, collaboration, and unparalleled technological solutions.
            Warm regards, <br /> <br />
            [Your Full Name] <br /> <br />
            Chairman <br /> <br />
            [Your Company Name]
          </p>
        </div>

        <p className="blogPart1-text1">MESSAGE FROM THE CEO</p>
        <div className="blogPart1-Body">
          <div className="blogPart1-div1">
            <div className="blogPart1-div">
              <Image className="blogPart1-img" src={''} />
            </div>
          </div>
          <p className="blogPart1-text2">Nabil Ul Tanvir Neon</p>
          <p className="blogPart1-text3">
            
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
