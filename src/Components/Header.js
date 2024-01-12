import React, { useState } from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import { Button, Drawer, Space } from "antd";
import { MenuOutlined, CloseOutlined, DownOutlined } from "@ant-design/icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [textColors, setTextColors] = useState([
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
  ]);

  const handleTextClick = (index) => {
    const updatedColors = textColors.map((_, i) =>
      i === index ? "red" : "black"
    );
    setTextColors(updatedColors);
  };

  return (
    <div className="header-body">
      <div className="headerBody">
        {/* For max size 1000 */}

        <div className="headerBox">
          <div className="header-MenuBox1">
            <Button
              className="headerBox-Menu"
              shape="circle"
              onClick={showDrawer}
              icon={<MenuOutlined />}
            />
          </div>
          <div className="header-MenuBox">Name&Icon</div>
          <div className="header-MenuBox2">Icon</div>
        </div>

        <Drawer
          title="App Name"
          placement="left"
          width={500}
          onClose={onClose}
          open={open}
          extra={
            <Space>
              <Button
                shape="circle"
                onClick={onClose}
                icon={<CloseOutlined />}
              />
            </Space>
          }
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>

        {/* For mim size 1000 */}
        <div className="headerBox-1">Icon and name</div>
        <div className="headerBox-2">
          <div className="headerBox-2-Box">
            <Link to="/" className="headerBox-2-Link">
              <p
                className={`headerBox-2-Text ${textColors[0]}`}
                onClick={() => handleTextClick(0)}
              >
                Home
              </p>
            </Link>
          </div>

          <div className="headerBox-2-Box">
            <p
              className={`headerBox-2-Text ${textColors[1]}`}
              onClick={() => handleTextClick(1)}
            >
              Services
            </p>
            <DownOutlined className="headerBox-2-Icon" />
          </div>

          <div className="headerBox-2-Box">
            <Link to="/Career" className="headerBox-2-Link">
              <p
                className={`headerBox-2-Text ${textColors[2]}`}
                onClick={() => handleTextClick(2)}
              >
                Career
              </p>
            </Link>
          </div>

          <div className="headerBox-2-Box">
            <Link to="/Blog" className="headerBox-2-Link">
              <p
                className={`headerBox-2-Text ${textColors[3]}`}
                onClick={() => handleTextClick(3)}
              >
                Blog
              </p>
            </Link>
          </div>

          <div className="headerBox-2-Box">
            <Link to="/About-Us" className="headerBox-2-Link">
              <p
                className={`headerBox-2-Text ${textColors[4]}`}
                onClick={() => handleTextClick(4)}
              >
                About Us
              </p>
            </Link>
          </div>
        </div>
        <div className="headerBox-3">
          <Link style={{ textDecoration: "none" }} to="/Check-Out">
            <button className={`headerBox-3-Button ${textColors[5]}`}
                onClick={() => handleTextClick(5)}>
              <p className="headerBox-3-BText">Get Started</p>
            </button>
          </Link>
        </div>
      </div>
      <div className="header-Line" />
    </div>
  );
}
