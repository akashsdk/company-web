import React from "react";
import "./Blog.css";
import Footer from "../Components/Footer";

import { Image, Tooltip, Button } from "antd";
import {
  LinkedinOutlined,
  FacebookOutlined,
  GlobalOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

import photo1 from "../Image/Profile.jpg";
import photo2 from "../Image/neon img.jpg";

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
            Dear Valued Clients,
            <br />
            <br />
            I am delighted to extend a warm welcome to you on behalf of our
            dynamic team at ABCode, where innovation meets
            excellence. As the Chairman of this esteemed software company, it is
            my privilege to connect with each and every one of you.
            <br />
            <br />
            At ABCode, we are driven by a commitment to deliver
            cutting-edge solutions that transcend expectations. We understand
            that in today's rapidly evolving digital landscape, your needs are
            unique, and we are dedicated to crafting bespoke software solutions
            tailored to meet and exceed those needs.
            <br />
            <br />
            Our journey is guided by a passion for innovation, a commitment to
            quality, and a relentless pursuit of customer satisfaction. We
            believe in the transformative power of technology and its ability to
            simplify complexities, empower businesses, and elevate user
            experiences.
            <br />
            <br />
            As we continue to pioneer advancements in the software industry, we
            invite you to embark on this journey with us. Your success is our
            success, and we are devoted to fostering enduring partnerships that
            stand the test of time. Whether you are a seasoned partner or
            exploring our offerings for the first time, we are here to serve you
            with unwavering dedication.
            <br />
            <br />
            Thank you for choosing ABCode. We look forward to
            contributing to your success and creating a future shaped by
            innovation, collaboration, and unparalleled technological solutions.
            <br />
            <br />
            Warm regards,
            <br />
            <br />
            Tasnim Shahriar Akash
            <br />
            Chairman
            <br />
            Advanced Binary Code Limited.
          </p>
          <div className="blogPart1-div3">
            <Tooltip title="Linkedin">
              <Button
                type="link"
                className=""
                href="https://www.linkedin.com/in/tasnimsakash/"
                target="_blank"
              >
                <LinkedinOutlined className="blogPart1-Icon1" />
              </Button>
            </Tooltip>
            <Tooltip title="Facebook">
              <Button
                type="link"
                className=""
                href="https://web.facebook.com/tasnimSakash/"
                target="_blank"
              >
                <FacebookOutlined className="blogPart1-Icon1" />
              </Button>
            </Tooltip>
            <Tooltip title="Website">
              <Button
                type="link"
                className=""
                href="https://my-portfolio-d43ec.web.app/"
                target="_blank"
              >
                <GlobalOutlined className="blogPart1-Icon1" />
              </Button>
            </Tooltip>
          </div>
        </div>

        <p className="blogPart1-text1">MESSAGE FROM THE CEO</p>
        <div className="blogPart1-Body">
          <div className="blogPart1-div1">
            <div className="blogPart1-div">
              <Image className="blogPart1-img" src={photo2} />
            </div>
          </div>
          <p className="blogPart1-text-2">Nabil Ul Tanvir Neon</p>
          <p className="blogPart1-text3">
            Dear Esteemed Clients,
            <br />
            <br />
            As the CEO of ABCode, it is my pleasure to extend a
            heartfelt welcome to you. At our core, we believe in the
            transformative power of technology and its ability to redefine the
            way businesses operate and thrive. I am thrilled to lead a team of
            dedicated professionals who are committed to delivering innovative
            and reliable software solutions.
            <br />
            <br />
            Our mission at ABCode is to empower your business with
            technology that not only meets but exceeds your expectations. In
            today's fast-paced digital landscape, staying ahead is not just an
            advantage—it's a necessity. We understand the challenges you face,
            and we are here to provide robust, scalable, and future-ready
            software solutions that propel your success.
            <br />
            <br />
            At every step, we prioritize customer satisfaction, ensuring that
            our products not only meet technical specifications but also address
            the unique needs of your business. As we embrace the latest industry
            trends and advancements, we remain unwavering in our commitment to
            delivering excellence.
            <br />
            <br />
            Thank you for considering ABCode as your technology
            partner. We look forward to fostering a collaborative relationship,
            driving innovation, and contributing to your growth story.
            <br />
            <br />
            Best regards,
            <br />
            <br />
            Nabil Ul Tanvir Neon
            <br />
            CEO
            <br />
            Advanced Binary Code Limited
          </p>
          <div className="blogPart1-div3">
            <Tooltip title="Linkedin">
              <Button type="link" className="" href="" target="_blank">
                <LinkedinOutlined className="blogPart1-Icon1" />
              </Button>
            </Tooltip>
            <Tooltip title="Facebook">
              <Button
                type="link"
                className=""
                href="https://web.facebook.com/neon.nabil.3"
                target="_blank"
              >
                <FacebookOutlined className="blogPart1-Icon1" />
              </Button>
            </Tooltip>
            <Tooltip title="Instagram">
              <Button
                type="link"
                className=""
                href="https://www.instagram.com/nabilneon/"
                target="_blank"
              >
                <InstagramOutlined className="blogPart1-Icon1" />
              </Button>
            </Tooltip>
          </div>
        </div>

        {/* Part-2 */}
      </div>
      <Footer />
    </div>
  );
}
