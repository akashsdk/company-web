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
            <p>Step: 1 (Basic Information)</p>
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
              placeholder="Address"
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
            <div>
              <button>
                <LeftOutlined /> <p>next</p>
              </button>
              <Button size="large" danger>
                Reset
              </Button>
              <button>
              <p>next</p>
                <RightOutlined /> 
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
