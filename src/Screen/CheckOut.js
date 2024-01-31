import React, { useState } from "react";
import "./CheckOut.css";

import Footer from "../Components/Footer";

import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Input, Button, Steps } from "antd";

const { TextArea } = Input;

export default function CheckOut() {
  const [page, setPage] = useState(0);

  // step-1
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const { name, email, phone, address, message } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
  };

  return (
    <div className="AppBody">
      <div className="CheckOut-Body">
        <div className="Check-Body">
          <p className="Check-HeaderText">Oder Now</p>
          <p className="Check-Text1">
            We can give you the best product at the lowest price. Our main goal
            is to provide you with good quality service. Hope you like our
            service, Thank you so much. 😊
          </p>
        </div>
        <div className="Check-BodyBox">
          {page === 0 ? (
            // Step: 1 (Basic Information)
            <div className="Check-BodyDiv">
              <p className="Check-Text2">Step: 1 (Basic Information)</p>
              <Input
                size="large"
                placeholder="Full Name"
                allowClear
                prefix={<UserOutlined />}
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
              <br />
              <br />
              <Input
                size="large"
                placeholder="Email Id"
                allowClear
                prefix={<MailOutlined />}
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <br />
              <br />

              <Input
                size="large"
                placeholder="Phone No"
                allowClear
                prefix={<PhoneOutlined />}
                type="tel"
                name="phone"
                value={phone}
                onChange={handleInputChange}
              />
              <br />
              <br />
              <Input
                size="large"
                placeholder="Address (Optional)"
                allowClear
                prefix={<EnvironmentOutlined />}
                type="text"
                name="address"
                value={address}
                onChange={handleInputChange}
              />
              <br />
              <br />
              <TextArea
                showCount
                maxLength={250}
                placeholder="Message (Optional)"
                type="text"
                name="message"
                value={message}
                onChange={handleInputChange}
                style={{
                  height: 120,
                  resize: "none",
                }}
              />

              <div className="CheckOut-Button-Div">
                <button className="CheckOut-Button">
                  <LeftOutlined className="CheckOut-Button-Icon" />
                  <p className="CheckOut-Button-Text">Previous</p>
                </button>
                <Button
                  onClick={handleReset}
                  className="CheckOut-Button2"
                  danger
                >
                  <p className="CheckOut-Button-Text">Reset</p>
                </Button>
                <button
                  className="CheckOut-Button"
                  onClick={() => {
                    setPage(1);
                  }}
                >
                  <p className="CheckOut-Button-Text">Next</p>
                  <RightOutlined className="CheckOut-Button-Icon" />
                </button>
              </div>
            </div>
          ) : page === 1 ? (
            // Step: 2 (Project Proposal)
            <div className="Check-BodyDiv">
              <p className="Check-Text2">Step: 2 (Project Proposal)</p>
              <Input
                size="large"
                placeholder="Full Name"
                allowClear
                prefix={<UserOutlined />}
              />
              <br />
              <br />
              <Input
                size="large"
                placeholder="Email Id"
                allowClear
                prefix={<MailOutlined />}
              />
              <br />
              <br />

              <Input
                size="large"
                placeholder="Phone No"
                allowClear
                prefix={<PhoneOutlined />}
              />
              <br />
              <br />
              <Input
                size="large"
                placeholder="Address (Optional)"
                allowClear
                prefix={<EnvironmentOutlined />}
              />
              <br />
              <br />
              <TextArea
                showCount
                maxLength={250}
                placeholder="Message (Optional)"
                style={{
                  height: 120,
                  resize: "none",
                }}
              />

              <div className="CheckOut-Button-Div">
                <button
                  className="CheckOut-Button"
                  onClick={() => {
                    setPage(0);
                  }}
                >
                  <LeftOutlined className="CheckOut-Button-Icon" />{" "}
                  <p className="CheckOut-Button-Text">Previous</p>
                </button>
                <Button className="CheckOut-Button2" danger>
                  <p className="CheckOut-Button-Text">Reset</p>
                </Button>
                <button
                  className="CheckOut-Button"
                  onClick={() => {
                    setPage(2);
                  }}
                >
                  <p className="CheckOut-Button-Text">Next</p>
                  <RightOutlined className="CheckOut-Button-Icon" />
                </button>
              </div>
            </div>
          ) : page === 2 ? (
            // Step: 1 (Overview)
            <div className="Check-BodyDiv">
              <p className="Check-Text2">Step: 3 (Overview)</p>

              <div className="Check-BodyBox-Div">
                <p className="Check-BodyBox-Text">Name: </p>
                <p className="Check-BodyBox-Text2">{name}</p>
              </div>

              <div className="Check-BodyBox-Div">
                <p className="Check-BodyBox-Text">Email: </p>
                <p className="Check-BodyBox-Text2">{email}</p>
              </div>

              <div className="Check-BodyBox-Div">
                <p className="Check-BodyBox-Text">Phone: </p>
                <p className="Check-BodyBox-Text2">{phone}</p>
              </div>

              <div className="Check-BodyBox-Div">
                <p className="Check-BodyBox-Text">Address: </p>
                <p className="Check-BodyBox-Text2">{address}</p>
              </div>

              <div className="Check-BodyBox-Div">
                <p className="Check-BodyBox-Text">Message: </p>
                <p className="Check-BodyBox-Text2">{message}</p>
              </div>

              <div className="CheckOut-Button-Div">
                <button
                  className="CheckOut-Button"
                  onClick={() => {
                    setPage(1);
                  }}
                >
                  <LeftOutlined className="CheckOut-Button-Icon" />
                  <p className="CheckOut-Button-Text">Previous</p>
                </button>
                <Button className="CheckOut-Button2" type="primary" >
                  <p className="CheckOut-Button-Text">Submit</p>
                </Button>
                <button className="CheckOut-Button">
                  <p className="CheckOut-Button-Text">Next</p>
                  <RightOutlined className="CheckOut-Button-Icon" />
                </button>
              </div>
            </div>
          ) : (
            <h1> Error page</h1>
          )}
          <div className="Check-Steps-Div"> 
            <Steps
              size="small"
              current={page}
              items={[
                {
                  title: "Basic Information",
                },
                {
                  title: "Project Proposal",
                },
                {
                  title: "Overview",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
