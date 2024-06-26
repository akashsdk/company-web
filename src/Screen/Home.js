import React, { useRef } from "react";
import "./Home.css";
import "../Others/TermsAndConditions.css";

import { Link } from "react-router-dom";
import { FloatButton } from "antd";

import { VerticalAlignTopOutlined } from "@ant-design/icons";

import HomeAnimation from "../Components/HomeAnimation";
import SoftwareService from "../Cart/SoftwareService";
import HomeWorks from "../Cart/HomeWorks";
import HomeTechnology from "../Cart/HomeTechnology";
import Footer from "../Components/Footer";
import Index from '../Components/Index';

import img1 from "../Image/We-Deploy-World.png";
import img2 from "../Image/pngtree-blue-removebg-preview (1).png";
import img3 from "../Image/Web-dev-removebg-preview.png";

import icon1 from "../Icon/computer.png";
import icon2 from "../Icon/cloud-computing.png";
import icon3 from "../Icon/reliability.png";
import icon4 from "../Icon/data.png";
import icon5 from "../Icon/data-server.png";
import icon6 from "../Icon/settings.png";
import icon7 from "../Icon/application.png";
import icon8 from "../Icon/ux-design.png";
import icon9 from "../Icon/assurance.png";

import icon10 from "../Icon/motivation.png";
import icon11 from "../Icon/presentation.png";
import icon12 from "../Icon/customer-service.png";
import icon13 from "../Icon/offshore.png";

import icon14 from "../Icon/java.png";
import icon15 from "../Icon/html.png";
import icon16 from "../Icon/css-3.png";
import icon17 from "../Icon/python.png";
import icon18 from "../Icon/science.png";
import icon19 from "../Icon/icons8-flutter-480.png";
import icon20 from "../Icon/icons8-amazon-web-services-480.png";
import icon21 from "../Icon/icons8-angular-96.png";
import icon22 from "../Icon/icons8-vuejs-240.png";
import icon23 from "../Icon/icons8-nodejs-480.png";
import icon24 from "../Icon/icons8-js-480.png";
import icon25 from "../Icon/icons8-firebase.png";
import icon26 from "../Icon/icons8-mongodb.png";
import icon27 from "../Icon/muSQL-removebg-preview.png";
import HelpCart from "../Cart/HelpCart";

export default function Home() {
  const topRef = useRef(null);
  return (
    <div className="home-Body">
      <div className="homeBody" ref={topRef} id="top">
        {/* Index */}
        <Index/>

        {/* Main-Body */}
        <div className="homeMain-Body">
          <div className="homeMain-Left">
            <div className="homeMain-Left-Text1NewBox">
              <p className="homeMain-Left-Text1">Welcome to</p>
              <p className="homeMain-Left-Text1New">
                Advanced Binary Code Limited
              </p>
              <p className="homeMain-Left-Text1">🙌</p>
            </div>

            <p className="homeMain-Left-Text2">
              We Deploy World Class Agile Product Teams on Demand
            </p>
            <p className="homeMain-Left-Text3">
              ABCode specializes in providing custom software development
              services. Get premium software solutions from a reliable
              outsourcing partner and set your business apart. Skilled teams
              that can design, build, space and scale your vision in the most
              efficient way.
            </p>
            <div className="homeMain-Left-Box1">
              <div className="homeMain-Left-Box2new">
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

        {/* HomeWorks-Part */}
        <div className="home-Part-Box2">
          <div style={{ height: "20px" }} />
          <div className="home-Part-Div2">
            <p className="home-Part-Text1">How ABCode Works</p>
            <p className="home-Part-Text2">
              We follow agile methodology to deliver a high quality task to meet
              established deadline. A business can choose the software
              outsourcing business model that best matches their needs. We will
              help them augment their core competencies.
            </p>
          </div>
          <div className="home-Part-Flex2">
            <Link className="home-Part-Link2" to="/home/team-augmentation">
              <HomeWorks
                img={icon10}
                text1="Team Augmentation"
                text2="Our team of expert software engineers provides additional support to your in-house team, ensuring a seamless collaboration and a boosted workflow. With our support, you can tackle even the most complex projects with confidence."
                text3="Know More"
              />
            </Link>

            <Link className="home-Part-Link2" to="/home/project-development">
              <HomeWorks
                img={icon11}
                text1="Project Development"
                text2="Our team of experts takes your ideas and transforms them into top-notch products through an efficient and cost-effective process. We aim to deliver products that are ready for user testing, ensuring a smooth and successful launch."
                text3="Estimate Project"
              />
            </Link>

            <Link className="home-Part-Link2" to="/home/mvp-services">
              <HomeWorks
                img={icon12}
                text1="MVP Services"
                text2="We are an experienced and MVP development company that will help you bring your product to life. Our end-to-end service covers the entire process, from ideation and design to delivery and ongoing support."
                text3="Know More"
              />
            </Link>

            <Link className="home-Part-Link2" to="/home/offshore-development">
              <HomeWorks
                img={icon13}
                text1="Offshore Development"
                text2="Wondering how to outsource software development to an offshore company? We built overseas team to work on your projects. acts as an extension of your in-house team and has the task of fast-tracking your projects."
                text3="Expand Office"
              />
            </Link>
          </div>
          <div style={{ height: "20px" }} />
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

        {/* Technology-Part */}
        <div className="home-Part-Box">
          <div className="home-Part-Div">
            <p className="home-Part-Text1">Technology We Used</p>
            <p className="home-Part-Text2">
              It has become a prerequisite for companies to develop custom
              software products to stay competitive. ABCode technical expertise
              use the most popular technology for development outsourcing
              software.
            </p>
          </div>

          <div className="home-Part3-Box">
            <div className="home-Part3-Div">
              <img className="home-Part3-img" src={img3} alt="" />
              <div className="home-Part3-DivRight">
                <p className="home-Part3-text1">
                  Using The most Update Technology
                </p>
                <p className="home-Part3-text2">
                  Entrusting the new technology to the most advanced programmers
                  will ensure a more robust and high-performing system.
                </p>
              </div>
            </div>
          </div>

          <div className="home-Part3-Box2">
            <div className="home-Part3-Box3">
              <HomeTechnology
                img={icon15}
                text="HTML"
                color="rgb(227, 76, 38)"
              />
              <HomeTechnology
                img={icon16}
                text="CSS"
                color="rgb(38, 77, 228)"
              />
              <HomeTechnology
                img={icon14}
                text="Java"
                color="rgb(240, 219, 79)"
              />
              <HomeTechnology
                img={icon19}
                text="Flutter"
                color="rgb(42, 217, 200)"
              />
            </div>

            <div className="home-Part3-Box3">
              <HomeTechnology img={icon20} text="aws" color="rgb(37, 47, 62)" />
              <HomeTechnology
                img={icon17}
                text="Python"
                color="rgb(75, 139, 190)"
              />
              <HomeTechnology
                img={icon21}
                text="Angular"
                color="rgb(250, 66, 34)"
              />
              <HomeTechnology
                img={icon18}
                text="React"
                color="rgb(97, 219, 251)"
              />
            </div>

            <div className="home-Part3-Box3">
              <HomeTechnology
                img={icon22}
                text="VueJS"
                color="rgb(65, 184, 131)"
              />
              <HomeTechnology
                img={icon23}
                text="NodeJS"
                color="rgb(48, 48, 48)"
              />
              <HomeTechnology
                img={icon24}
                text="ExpressJS"
                color="rgb(19, 19, 31)"
              />
              <HomeTechnology img={icon25} text="Firebase" color="#FFA611" />
            </div>

            <div className="home-Part3-Box3">
              <HomeTechnology
                img={icon26}
                text="MongoDB"
                color="rgb(77, 179, 61)"
              />
              <HomeTechnology img={icon27} text="MySQL" color="#F29111" />
            </div>
          </div>

          {/* for mobile Screen Only */}
          <div className="home-Part3-Box4">
            <div className="home-Part3-Box5">
              <HomeTechnology
                img={icon15}
                text="HTML"
                color="rgb(227, 76, 38)"
              />
              <HomeTechnology
                img={icon16}
                text="CSS"
                color="rgb(38, 77, 228)"
              />
              <HomeTechnology
                img={icon14}
                text="Java"
                color="rgb(240, 219, 79)"
              />
              <HomeTechnology
                img={icon19}
                text="Flutter"
                color="rgb(42, 217, 200)"
              />
              <HomeTechnology img={icon20} text="aws" color="rgb(37, 47, 62)" />
              <HomeTechnology
                img={icon17}
                text="Python"
                color="rgb(75, 139, 190)"
              />
              <HomeTechnology
                img={icon21}
                text="Angular"
                color="rgb(250, 66, 34)"
              />
            </div>

            <div className="home-Part3-Box5">
              <HomeTechnology
                img={icon18}
                text="React"
                color="rgb(97, 219, 251)"
              />
              <HomeTechnology
                img={icon22}
                text="VueJS"
                color="rgb(65, 184, 131)"
              />
              <HomeTechnology
                img={icon23}
                text="NodeJS"
                color="rgb(48, 48, 48)"
              />
              <HomeTechnology
                img={icon24}
                text="ExpressJS"
                color="rgb(19, 19, 31)"
              />
              <HomeTechnology img={icon25} text="Firebase" color="#FFA611" />
              <HomeTechnology
                img={icon26}
                text="MongoDB"
                color="rgb(77, 179, 61)"
              />
              <HomeTechnology img={icon27} text="MySQL" color="#F29111" />
            </div>
          </div>
        </div>

        {/* HomeAnimation-Part */}
        <HomeAnimation />

        {/* HelpCart-Part */}
        <HelpCart
          text1="Our Working Process"
          text2="Welcome to our software selling platform, where innovation meets
          convenience. Our marketplace is designed to cater to your software
          needs efficiently. Discover a diverse array of cutting-edge
          solutions crafted by talented developers. From productivity tools
          to specialized applications, our platform offers seamless
          navigation and a user-friendly interface. Easily place orders for
          bespoke software, ensuring a personalized experience tailored to
          your requirements. Join us and experience a hassle-free journey in
          acquiring top-notch software solutions, empowering you to achieve
          your digital aspirations effortlessly."
          text3="Analyze business and competitors and user reviews."
          text4="Contract signing with stakeholders to develop the product."
          text5="Designing, hypothesis testing, frontend and backend development."
          text6="Deploying the finished products, Maintenance and updates."
        />

        <div style={{height:'35px'}}/>

        {/* TermsAndConditions */}
        <div className="Terms-Div">
          <div className="Terms-DivNew">
            <p className="Terms-Text1">Terms And Conditions</p>
          </div>
          <p className="Terms-Text2">
            Welcome to ABCode! We are delighted to have you on board as a valued
            client for your software development needs. Our commitment is to
            deliver high-quality mobile apps and web applications that not only
            meet but exceed your expectations. Please take a moment to review
            our Terms and Conditions.
          </p>

          <p className="Terms-Text3">1. Project Initiation:</p>
          <p className="Terms-Text2">
            The journey begins with understanding your vision and requirements.
            We strive to commence projects promptly after a thorough discussion
            to ensure clarity and alignment.
          </p>

          <p className="Terms-Text3">2. Quality Assurance:</p>
          <p className="Terms-Text2">
            At ABCode, we pride ourselves on delivering top-notch software
            solutions. Our dedicated team of professionals works diligently to
            maintain the highest standards of quality throughout the development
            process.
          </p>

          <p className="Terms-Text3">3. Cost Transparency:</p>
          <p className="Terms-Text2">
            We understand the importance of cost-effectiveness in today's
            competitive market. Our commitment is to provide excellent software
            development services at a reasonable cost. Our pricing structure is
            transparent, and we are happy to discuss any aspects of the pricing
            model with our clients.
          </p>

          <p className="Terms-Text3"> 4. Client Satisfaction:</p>
          <p className="Terms-Text2">
            Our primary goal is to make you, our client, happy. We value your
            feedback and actively encourage open communication throughout the
            development lifecycle. Your satisfaction is our measure of success.
          </p>

          <p className="Terms-Text3"> 5. Project Timelines:</p>
          <p className="Terms-Text2">
            We are dedicated to delivering projects within agreed timelines. Any
            potential delays will be communicated transparently, and we work
            collaboratively to find solutions that keep your project on track.
          </p>

          <p className="Terms-Text3">6. Intellectual Property:</p>
          <p className="Terms-Text2">
            Upon project completion and full payment, all intellectual property
            rights related to the developed software are transferred to the
            client. We respect the confidentiality of your ideas and ensure
            their protection.
          </p>

          <p className="Terms-Text3"> 7. Support and Maintenance:</p>
          <p className="Terms-Text2">
            Post-launch, we provide ongoing support and maintenance services to
            ensure the smooth functioning of your software. We are committed to
            promptly addressing any issues that may arise.
          </p>

          <p className="Terms-Text3">8. Termination of Services:</p>
          <p className="Terms-Text2">
            In the unlikely event of dissatisfaction, both parties reserve the
            right to terminate services. We maintain transparency and provide a
            clear understanding of any associated costs in such circumstances.
          </p>

          <p className="Terms-Text3">9. Legal Compliance:</p>
          <p className="Terms-Text2">
            ABCode operates in full compliance with local and international
            laws. We respect privacy and adhere to data protection regulations.
          </p>

          <p className="Terms-Text3">10. Amendments to Terms:</p>
          <p className="Terms-Text2">
            We reserve the right to update or modify these Terms and Conditions
            to reflect changes in our business practices or comply with legal
            requirements. Clients will be notified of any updates promptly.
            <br />
            <br />
            By engaging with ABCode, you agree to these Terms and Conditions. We
            look forward to a successful collaboration and the opportunity to
            bring your software ideas to life. If you have any questions or
            concerns, please feel free to contact us.
            <br />
            <br />
            Thank you for choosing ABCode!
            <br />
            <br />
            Advanced Binary Code Limited.
            <br />
            advancedbinarycode@gmail.com.
          </p>
        </div>

        <FloatButton
          icon={<VerticalAlignTopOutlined />}
          visibilityHeight={0}
          onClick={() => {
            topRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
