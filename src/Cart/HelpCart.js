import React, { useState } from "react";
import "./HelpCart.css";

import Image1 from "../Image/Business Idea Analysis.png";
import Image2 from "../Image/Evaluate Costing.png";
import Image3 from "../Image/Contract Signing1.png";
import Image4 from "../Image/We Build the project.png";

import {
  ArrowRightOutlined,
  ArrowDownOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Modal, message, Button } from "antd";

export default function HelpCart() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",

    text: "",
  });

  const { name, email, phone, lastName, text } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      lastName: "",
      text: "",
    });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "successful!",
        duration: 2,
      });
      window.location.reload();
    }, 1000);
  };
  return (
    <div className="help-body">
      {contextHolder}
      <p className="help-mainText">MVP Development Process</p>
      <p className="help-DetelsText">
        Our MVP development service follows the best practices of the agile
        development process. At our MVP development company, we follow a
        straightforward process to build MVP with the highest return on
        investment.
      </p>
      <div className="help-TopDiv">
        <div className="help-TopBox">
          <img src={Image1} className="help-TopBoxImg" alt="" />
          <p className="help-TopBoxText1">Business Idea Analysis</p>
          <p className="help-TopBoxText2">
            Analyze product idea, target market, and usability testing.
          </p>
          <div className="help-TopBoxDown">
            <p className="help-TopBoxText3">Step-1 </p>
            <ArrowRightOutlined className="help-TopBoxIcon1" />
            <ArrowDownOutlined className="help-TopBoxIcon2" />
          </div>
        </div>

        <div className="help-TopBox">
          <img src={Image2} className="help-TopBoxImg" alt="" />
          <p className="help-TopBoxText1">Evaluate Costing</p>
          <p className="help-TopBoxText2">
            Analyze product idea, target market, and usability testing.
          </p>
          <div className="help-TopBoxDown">
            <p className="help-TopBoxText3">Step-2 </p>
            <ArrowRightOutlined className="help-TopBoxIcon1" />
            <ArrowDownOutlined className="help-TopBoxIcon2" />
          </div>
        </div>

        <div className="help-TopBox">
          <img src={Image3} className="help-TopBoxImg" alt="" />
          <p className="help-TopBoxText1">Contract Signing</p>
          <p className="help-TopBoxText2">
            Analyze product idea, target market, and usability testing.
          </p>
          <div className="help-TopBoxDown">
            <p className="help-TopBoxText3">Step-3</p>
            <ArrowRightOutlined className="help-TopBoxIcon1" />
            <ArrowDownOutlined className="help-TopBoxIcon2" />
          </div>
        </div>

        <div className="help-TopBox">
          <img src={Image4} className="help-TopBoxImg" alt="" />
          <p className="help-TopBoxText1">Project Development</p>
          <p className="help-TopBoxText2">
            Analyze product idea, target market, and usability testing.
          </p>
          <div className="help-TopBoxDown">
            <p className="help-TopBoxText3">Step-3 </p>
            <CheckCircleOutlined className="help-TopBoxIcon1" />
            <CheckCircleOutlined className="help-TopBoxIcon2" />
          </div>
        </div>
      </div>

      <div className="helpMain-Box">
        <div className="helpMain-LeftBox">
          <p className="help-mainText">How can we help you</p>
          <p className="helpMain-LeftText1">
            If you need a partner to assist with the end to end development
            process, Our professional team is here to help you.
          </p>
          <div className="helpMain-LeftBox2">
            <CheckCircleOutlined className="helpMain-LeftIcon" />
            <p className="helpMain-LeftText2">
              Chooses Agile and Scrum development approaches to track the
              development process.
            </p>
          </div>

          <div className="helpMain-LeftBox2">
            <CheckCircleOutlined className="helpMain-LeftIcon" />
            <p className="helpMain-LeftText2">
              {" "}
              All the planning, design, and development stages take place under
              one roof.
            </p>
          </div>

          <div className="helpMain-LeftBox2">
            <CheckCircleOutlined className="helpMain-LeftIcon" />
            <p className="helpMain-LeftText2">
              {" "}
              Identify the bugs and fixed it regularly.
            </p>
          </div>

          <div className="helpMain-LeftBox2">
            <CheckCircleOutlined className="helpMain-LeftIcon" />
            <p className="helpMain-LeftText2">
              {" "}
              Choose the best technology to meet industry standards and deliver
              high-quality software.
            </p>
          </div>

          <div className="helpMain-LeftBox2">
            <CheckCircleOutlined className="helpMain-LeftIcon" />
            <p className="helpMain-LeftText2">
              {" "}
              Explore use cases based on your industry
            </p>
          </div>

          <Link className="helpMain-LeftLink" to="/Contacts">
            <p>Know Our work process</p>
            <ArrowRightOutlined
              style={{ marginTop: "3px", marginLeft: "10px" }}
            />
          </Link>
        </div>

        <div className="helpMain-RightBox">
          <div className="helpMain-RightBox2">
            <div className="helpMain-RightDiv">
              <div className="helpMain-RightDiv2">
                <p className="helpMain-RightText">First Name:</p>
                <div className="helpMain-RightInputDiv">
                  <input
                    className="helpMain-RightInput"
                    placeholder="name"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="helpMain-RightDiv2">
                <p className="helpMain-RightText">Last Name:</p>
                <div className="helpMain-RightInputDiv">
                  <input
                    className="helpMain-RightInput"
                    placeholder="name"
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="helpMain-RightDiv">
              <div className="helpMain-RightDiv2">
                <p className="helpMain-RightText">Business Email:</p>
                <div className="helpMain-RightInputDiv">
                  <input
                    className="helpMain-RightInput"
                    placeholder="email"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="helpMain-RightDiv2">
                <p className="helpMain-RightText">Phone Number:</p>
                <div className="helpMain-RightInputDiv">
                  <input
                    className="helpMain-RightInput"
                    placeholder="phone"
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]*"
                    value={phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="helpMain-RightDiv3">
              <p className="helpMain-RightText">Project Details:</p>
              <div className="helpMain-RightTextareaDiv">
                <textarea
                  className="helpMain-RightTextarea"
                  placeholder="project details"
                  id="text"
                  name="text"
                  value={text}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="helpMain-RightDiv4">
             

                
              <Button onClick={showModal} size='large' danger>Reset</Button>
              <Button onClick={openMessage} className="helpMain-RightButton" type="primary" size='large'>
              Send
          </Button>
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
    </div>
  );
}
