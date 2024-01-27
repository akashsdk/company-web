import React, { useState, useEffect } from "react";
import "./Career.css";
import Footer from "../Components/Footer";
import SoftwareService from "../Cart/SoftwareService";

import img1 from "../Image/we-are-hiring.png";
import img2 from "../Image/why join with us.png";
import img3 from "../Image/application-form-removebg-preview.png";
import img4 from "../Image/Assessment.png";
import img5 from "../Image/Interview-removebg-preview.png";
import img6 from "../Image/Welcoming-removebg-preview.png";

import icon1 from "../Icon/Flexible Time.png";
import icon2 from "../Icon/Knowledge Share.png";
import icon3 from "../Icon/career-promotion.png";
import icon4 from "../Icon/protect.png";
import icon5 from "../Icon/Insurance.png";
import icon6 from "../Icon/inspiration.png";

import { Input, Button, Tooltip, Modal } from "antd";
import {
  ArrowRightOutlined,
  EnvironmentOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  IdcardOutlined,
  GithubOutlined,
} from "@ant-design/icons";

export default function Career() {
  const [activeBox, setActiveBox] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBox((prevBox) => (prevBox % 3) + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  // selectedOption-1
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  // selectedOption-2
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleSelectChange2 = (e) => {
    setSelectedOption2(e.target.value);
  };
  // selectedOption-3
  const [selectedOption3, setSelectedOption3] = useState("");

  const handleSelectChange3 = (e) => {
    setSelectedOption3(e.target.value);
  };
  // selected-File
  const [selectFile, setSelectFile] = useState("");

  const handleSelectFile = (e) => {
    setSelectFile(e.target.value);
  };
  // input
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");
  const [input7, setInput7] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "input1") {
      setInput1(value);
    } else if (name === "input2") {
      setInput2(value);
    } else if (name === "input3") {
      setInput3(value);
    } else if (name === "input4") {
      setInput4(value);
    } else if (name === "input5") {
      setInput5(value);
    } else if (name === "input6") {
      setInput6(value);
    } else if (name === "input7") {
      setInput7(value);
    }
  };

  const handleSend = () => {
    // Implement your logic for sending the form data
    console.log("Form data sent:", {
      input1,
      input2,
      input3,
      input4,
      input5,
      input6,
      input7,
      selectedOption,
      selectedOption2,
      selectedOption3,
      selectFile,
    });
  };

  const isButtonDisabled =
    input1 === "" ||
    input2 === "" ||
    input3 === "" ||
    input4 === "" ||
    input5 === "" ||
    input6 === "" ||
    input7 === "" ||
    selectedOption === "" ||
    selectedOption2 === "" ||
    selectedOption3 === "" ||
    selectFile === "";

  const text = <span>please! fill up the form</span>;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setInput1("");
    setInput2("");
    setInput3("");
    setInput4("");
    setInput5("");
    setInput6("");
    setInput7("");
    setSelectedOption("");
    setSelectedOption2("");
    setSelectedOption3("");
    setSelectFile("");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
                  <p
                    className="careerBox3-text5"
                    onClick={() => {
                      setActiveBox(1);
                    }}
                  >
                    Senior Node.js Developer
                  </p>
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
                  <p
                    className="careerBox3-text5"
                    onClick={() => {
                      setActiveBox(2);
                    }}
                  >
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
                  <p
                    className="careerBox3-text5"
                    onClick={() => {
                      setActiveBox(3);
                    }}
                  >
                    Senior UX & UI Designer{" "}
                  </p>
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

        {/* part-5 */}
        <div className="Career-Box5">
          <p className="Career-Box3-text1">How to Join Our Dynamic Team</p>
          <p className="Career-Box3-text2">
            Become a part of the (web site name) family through our thorough
            4-step hiring process.
          </p>
          <div className="Career-Box5-Div1">
            <div className="Career-Box5-Div2">
              <div className="Career-Box5-Div4">
                <img className="Career-Box5-img" src={img3} alt="" />
                <div className="Career-Box5-Div3">
                  <p className="Career-Box5-Text2">Apply</p>
                  <p className="Career-Box5-Text3">
                    Do you want to be a part of the (web site name) team? Go
                    through our job openings and submit your application.
                  </p>
                </div>
              </div>
            </div>

            <div className="Career-Box5-Div2">
              <div className="Career-Box5-Div4">
                <img className="Career-Box5-img" src={img4} alt="" />
                <div className="Career-Box5-Div3">
                  <p className="Career-Box5-Text2">Assessment</p>
                  <p className="Career-Box5-Text3">
                    If your skills and experience match our needs, we'll reach
                    out to you for a skills assessment.
                  </p>
                </div>
              </div>
            </div>

            <div className="Career-Box5-Div2">
              <div className="Career-Box5-Div4">
                <img className="Career-Box5-img" src={img5} alt="" />
                <div className="Career-Box5-Div3">
                  <p className="Career-Box5-Text2">Interview</p>
                  <p className="Career-Box5-Text3">
                    After a successful assessment, we'll invite you for a formal
                    interview to discuss your qualifications and experience in
                    more detail.
                  </p>
                </div>
              </div>
            </div>

            <div className="Career-Box5-Div2">
              <div className="Career-Box5-Div4">
                <img className="Career-Box5-img" src={img6} alt="" />
                <div className="Career-Box5-Div3">
                  <p className="Career-Box5-Text2">Welcoming You to Our Team</p>
                  <p className="Career-Box5-Text3">
                    Based on your performance in the assessment and interview,
                    we'll make a job offer and welcome you to our dedicated and
                    passionate team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* part-6 */}
        <div className="Career-Box6">
          <p className="Career-Box3-text1">Send Us Your Resume</p>
          <div className="Career-Box6-From">
            <div className="Career-Box6-Div1">
              <Input
                className="Career-Box6-Input"
                size="large"
                placeholder="First Name "
                prefix={<UserOutlined />}
                name="input1"
                value={input1}
                onChange={handleInputChange}
              />
              <Input
                className="Career-Box6-Input"
                size="large"
                placeholder="Last Name"
                prefix={<UserOutlined />}
                name="input2"
                value={input2}
                onChange={handleInputChange}
              />
            </div>

            <div className="Career-Box6-Div1">
              <Input
                className="Career-Box6-Input"
                type="email"
                size="large"
                placeholder="Email ID"
                prefix={<MailOutlined />}
                name="input3"
                value={input3}
                onChange={handleInputChange}
              />
              <Input
                className="Career-Box6-Input"
                size="large"
                type="number"
                placeholder="Phone Number"
                prefix={<PhoneOutlined />}
                name="input4"
                value={input4}
                onChange={handleInputChange}
              />
            </div>

            <div className="Career-Box6-Div1">
              <Input
                className="Career-Box6-Input"
                size="large"
                placeholder="Passport/NID Number"
                prefix={<IdcardOutlined />}
                name="input5"
                value={input5}
                onChange={handleInputChange}
              />
              <select
                className="Career-Box6-Select"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="">Position</option>
                <option value="option1">Software Engineer</option>
                <option value="option2">Sr. Software Engineer</option>
                <option value="option3">UX Designer</option>
                <option value="option4">Sr. UX Designer</option>
                <option value="option5">Graphic Designer</option>
                <option value="option6">Sr. Graphic Designer</option>
                <option value="option7">Digital Marketer</option>
                <option value="option8">Content Writer</option>
              </select>
            </div>

            <div className="Career-Box6-Div1">
              <select
                className="Career-Box6-Select"
                value={selectedOption2}
                onChange={handleSelectChange2}
              >
                <option value="">Category</option>
                <option value="option1">JavaScript</option>
                <option value="option2">Java</option>
                <option value="option3">Golang</option>
                <option value="option4">PHP</option>
                <option value="option5">Node Js</option>
                <option value="option6">DevOps</option>
                <option value="option7">Database</option>
                <option value="option8">SQA</option>
                <option value="option9">Game Development</option>
                <option value="option10">Server Security</option>
                <option value="option11">Other's</option>
              </select>

              <select
                className="Career-Box6-Select"
                value={selectedOption3}
                onChange={handleSelectChange3}
              >
                <option value="">Experience </option>
                <option value="option1">2 Years</option>
                <option value="option2">3 Years</option>
                <option value="option3">4 Years</option>
                <option value="option4">5 Years</option>
                <option value="option5">5 Years +</option>
                <option value="option6">Fresher or Internship</option>
              </select>
            </div>

            <div className="Career-Box6-Div1">
              <Input
                className="Career-Box6-Input"
                size="large"
                placeholder="Github Account Link"
                prefix={<GithubOutlined />}
                name="input6"
                value={input6}
                onChange={handleInputChange}
              />
              <Input
                className="Career-Box6-Input"
                size="large"
                placeholder="Address"
                prefix={<EnvironmentOutlined />}
                name="input7"
                value={input7}
                onChange={handleInputChange}
              />
            </div>
            <div className="Career-Box6-FileDiv">
              <p className="Career-Box6-FileText">Resume:</p>
              <input
                className="Career-Box6-FileSelect"
                type="file"
                accept=".pdf"
                value={selectFile}
                onChange={handleSelectFile}
              />
            </div>

            <div className="Career-Box6-ButtonDiv">
              <Button onClick={showModal} size="large" danger>
                Reset
              </Button>

              <Tooltip placement="topLeft" title={isButtonDisabled ? text : ""}>
                <Button
                  onClick={handleSend}
                  type="primary"
                  size="large"
                  disabled={isButtonDisabled}
                  style={{ marginLeft: "30px" }}
                >
                  Send
                </Button>
              </Tooltip>
            </div>

            <Modal
              title="Confirm to Reset !"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            ></Modal>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
