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
import { Input, Button } from "antd";

const { TextArea } = Input;

export default function CheckOut() {
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
          <div className="Check-BodyDiv">
            <p className="Check-Text2">Step: 1 (Basic Information)</p>
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
              <button className="CheckOut-Button">
                <LeftOutlined className="CheckOut-Button-Icon" />{" "}
                <p className="CheckOut-Button-Text">Previous</p>
              </button>
              <Button className="CheckOut-Button2" danger>
                <p className="CheckOut-Button-Text">Reset</p>
              </Button>
              <button className="CheckOut-Button">
                <p className="CheckOut-Button-Text">Next</p>
                <RightOutlined className="CheckOut-Button-Icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
