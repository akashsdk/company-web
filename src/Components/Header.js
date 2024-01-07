import React, { useState } from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import { Button, Drawer, Space, Menu } from "antd";
import { MenuOutlined, CloseOutlined, DownOutlined } from "@ant-design/icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
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
              <p className="headerBox-2-Text">Home</p>
            </Link>
          </div>

          <div className="headerBox-2-Box">
            <p className="headerBox-2-Text">Services</p>
            <DownOutlined className="headerBox-2-Icon" />
          </div>

          <div className="headerBox-2-Box">
            <Link to="/Career" className="headerBox-2-Link">
              <p className="headerBox-2-Text">Career</p>
            </Link>
          </div>

          <div className="headerBox-2-Box">
            <Link to="/Blog" className="headerBox-2-Link">
              <p className="headerBox-2-Text">Blog</p>
            </Link>
          </div>

          <div className="headerBox-2-Box">
            <Link to="/About-Us" className="headerBox-2-Link">
              <p className="headerBox-2-Text">About Us</p>
            </Link>
          </div>
        </div>
        <div className="headerBox-3">
          <Link style={{ textDecoration: "none" }} to="/Contacts">
            <button className="headerBox-3-Button">
              <p className="headerBox-3-BText">Get Started</p>
            </button>
          </Link>
        </div>
      </div>
      <div className="header-Line" />
    </div>
  );
}
