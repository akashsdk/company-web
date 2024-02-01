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
  AppstoreOutlined,
} from "@ant-design/icons";
import { Input, Button, Steps, Checkbox, Drawer, theme } from "antd";

const { TextArea } = Input;

export default function CheckOut() {
  const [page, setPage] = useState(1);

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

  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [open2, setOpen2] = useState(false);
  const showDrawer2 = () => {
    setOpen2(true);
  };
  const onClose2 = () => {
    setOpen2(false);
  };
  const containerStyle = {
    position: "relative",
    height: 200,
    padding: 48,
    overflow: "hidden",
    background: token.colorFillAlter,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
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
                allowClear
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
                placeholder="Application Name"
                allowClear
                prefix={<AppstoreOutlined />}
              />
              <br />
              <br />
              <select className="CheckOut-Select">
                <option value="">Application Type</option>
                <option value="option1">Web Application</option>
                <option value="option2">Mobile Application</option>
                <option value="option3">Both (Web & Mobile)</option>
                <option value="option4">Desktop Application</option>
                <option value="option%">Game Development</option>
              </select>
              <br />
              <br />
              <select className="CheckOut-Select">
                <option value="">Admin Dashboard</option>
                <option value="option1"> Website </option>
                <option value="option2"> Application</option>
                <option value="option3">Both</option>
                <option value="option4">Without Admin Panel</option>
              </select>
              <br />
              <br />
              <select className="CheckOut-Select">
                <option value="">Programming Language</option>
                <option value="option1">JavaScript</option>
                <option value="option2">Python</option>
                <option value="option3">PHP</option>
                <option value="option4">Java</option>
              </select>
              <br />
              <br />
              <div className="CheckOut-Checkbox">
                <div style={containerStyle}>
                  Render in this
                  <div
                    style={{
                      marginTop: 16,
                    }}
                  >
                    <Button type="primary" onClick={showDrawer2}>
                      Open2
                    </Button>
                    <Button type="primary" onClick={showDrawer}>
                      Open
                    </Button>
                    
                  </div>
                  <Drawer
                    title="Back-end"
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    open={open}
                    getContainer={false}
                  >
                    <p>Some contents...</p>
                  </Drawer>
                  <Drawer
                    title="Front-end"
                    placement="left"
                    closable={false}
                    onClose={onClose2}
                    open={open2}
                    getContainer={false}
                  >
                    <p>Some contents...</p>
                  </Drawer>
                </div>
              </div>
              
              <br />
              <br />
              <TextArea
                showCount
                maxLength={250}
                placeholder="Project Details (Optional)"
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
                <Button className="CheckOut-Button2" type="primary">
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
