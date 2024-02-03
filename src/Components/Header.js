import React, { useState, useEffect } from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import { Button, Drawer, Menu } from "antd";
import {
  MenuOutlined,
  UpOutlined,
  DownOutlined,
  HomeOutlined,
  ContactsOutlined,
  DesktopOutlined,
  MacCommandOutlined,
  AppstoreOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

import icon1 from "../Icon/united-kingdom.png";
import icon2 from "../Icon/flag.png";
import icon3 from "../Icon/india.png";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

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
    "black",
  ]);

  const handleTextClick = (index) => {
    const updatedColors = textColors.map((_, i) =>
      i === index ? "red" : "black"
    );
    setTextColors(updatedColors);
    setOpen(false);
  };

  const items = [
    getItem(
      <Link onClick={onClose} to="/">
        Home
      </Link>,
      "1",
      <HomeOutlined />
    ),
    getItem("Services", "sub1", <AppstoreOutlined />, [
      getItem(
        <Link onClick={onClose} to="/team-augmentation">
          Team Augmentation
        </Link>,
        "2"
      ),
      getItem(
        <Link onClick={onClose} to="/project-development">
          Project Development
        </Link>,
        "3"
      ),
      getItem(
        <Link onClick={onClose} to="/mvp-services">
          MVP Services
        </Link>,
        "4"
      ),
      getItem(
        <Link onClick={onClose} to="/offshore-development">
          Offshore Development
        </Link>,
        "5"
      ),
    ]),
    getItem(
      <Link onClick={onClose} to="/career">
        Career
      </Link>,
      "6",
      <ContactsOutlined />
    ),
    getItem(
      <Link onClick={onClose} to="/blog">
        Blog
      </Link>,
      "7",
      <MacCommandOutlined />
    ),
    getItem(
      <Link onClick={onClose} to="/about-us">
        About Us
      </Link>,
      "8",
      <DesktopOutlined />
    ),
    getItem(
      <Link onClick={onClose} to="/contacts">
        Contact Us
      </Link>,
      "9",
      <CustomerServiceOutlined />
    ),
  ];

  const storedSocialMedia = localStorage.getItem("selectedSocialMedia");
  const [selectedSocialMedia, setSelectedSocialMedia] = useState(
    storedSocialMedia || null
  );

  const handleSocialMediaSelect = (socialMedia) => {
    setSelectedSocialMedia(socialMedia);
  };

  useEffect(() => {
    localStorage.setItem("selectedSocialMedia", selectedSocialMedia);
  }, [selectedSocialMedia]);
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
          <div className="header-MenuBox">
            <Link to="/">Name&Icon</Link>
          </div>
          <div className="header-MenuBox2">Icon</div>
        </div>

        <Drawer
          placement="left"
          width={500}
          onClose={onClose}
          open={open}
          extra={
            <div className="header-DrawerHeader">
              <Link style={{ textDecoration: "none" }} to="/Check-Out">
                <button
                  className={`headerBox-3-Button2 ${textColors[5]}`}
                  onClick={() => handleTextClick(5)}
                >
                  <p className="headerBox-3-BText2">Get Started</p>
                </button>
              </Link>
            </div>
          }
        >
          <div>
            <Menu
              style={{
                width: "100%",
              }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="light"
              items={items}
            />
          </div>
        </Drawer>

        {/* For mim size 1000 */}
        <div className="headerBox-1">Icon and name</div>
        <div className="headerBox-2">
          <div className="headerBox-2-Box">
            <Link
              to="/"
              className="headerBox-2-Link"
              onClick={() => handleTextClick(0)}
            >
              <p className={`headerBox-2-Text ${textColors[0]}`}>Home</p>
            </Link>
          </div>

          <div className="dropdown">
            <p className={`headerBox-2-Text ${textColors[1]}`}>Services</p>
            <DownOutlined className="headerBox-2-Icon" />
            <UpOutlined className="headerBox-2-Icon2" />
            <div className="dropdown-content">
              <Link
                onClick={() => handleTextClick(1)}
                to="/team-augmentation"
                className="dropdown-content-Link"
              >
                <p className="dropdown-content-Text">Team Augmentation</p>
              </Link>
              <Link
                onClick={() => handleTextClick(1)}
                to="/project-development"
                className="dropdown-content-Link"
              >
                <p className="dropdown-content-Text">Project Development</p>
              </Link>
              <Link
                onClick={() => handleTextClick(1)}
                to="/mvp-services"
                className="dropdown-content-Link"
              >
                <p className="dropdown-content-Text">MVP Services</p>
              </Link>
              <Link
                onClick={() => handleTextClick(1)}
                to="/offshore-development"
                className="dropdown-content-Link"
              >
                <p className="dropdown-content-Text">Offshore Development</p>
              </Link>
            </div>
          </div>

          <div className="headerBox-2-Box">
            <Link
              to="/career"
              className="headerBox-2-Link"
              onClick={() => handleTextClick(2)}
            >
              <p className={`headerBox-2-Text ${textColors[2]}`}>Career</p>
            </Link>
          </div>

          <div className="headerBox-2-Box">
            <Link
              to="/blog"
              className="headerBox-2-Link"
              onClick={() => handleTextClick(3)}
            >
              <p className={`headerBox-2-Text ${textColors[3]}`}>Blog</p>
            </Link>
          </div>

          <div className="headerBox-2-Box">
            <Link
              to="/about-us"
              className="headerBox-2-Link"
              onClick={() => handleTextClick(4)}
            >
              <p className={`headerBox-2-Text ${textColors[4]}`}>About Us</p>
            </Link>
          </div>

          <div className="dropdown">
            {selectedSocialMedia ? (
              <div>
                {selectedSocialMedia === "english" && (
                  <img className="headerNew-Icon" alt="" src={icon1} />
                )}
                {selectedSocialMedia === "bangla" && (
                  <img className="headerNew-Icon" alt="" src={icon2} />
                )}
                {selectedSocialMedia === "hindi" && (
                  <img className="headerNew-Icon" alt="" src={icon3} />
                )}
              </div>
            ) : (
              <p>Rrror</p>
            )}

            <DownOutlined className="headerBox-2-Icon" />
            <UpOutlined className="headerBox-2-Icon2" />
            <div className="dropdown-content">
              <button
                className="headerNew-Button"
                onClick={() => handleSocialMediaSelect("english")}
              >
                <img className="headerNew-Icon2" alt="" src={icon1} />
                <p className="headerBox-2-Text">English</p>
              </button>

              <button
                className="headerNew-Button"
                onClick={() => handleSocialMediaSelect("bangla")}
              >
                <img className="headerNew-Icon2" alt="" src={icon2} />
                <p className="headerBox-2-Text">Bangla</p>
              </button>

              <button
                className="headerNew-Button"
                onClick={() => handleSocialMediaSelect("hindi")}
              >
                <img className="headerNew-Icon2" alt="" src={icon3} />
                <p className="headerBox-2-Text">Hindi</p>
              </button>
            </div>
          </div>
        </div>
        <div className="headerBox-3">
          <Link style={{ textDecoration: "none" }} to="/Check-Out">
            <button
              className={`headerBox-3-Button ${textColors[5]}`}
              onClick={() => handleTextClick(5)}
            >
              <p className="headerBox-3-BText">Get Started</p>
            </button>
          </Link>
        </div>
      </div>
      <div className="header-Line" />
    </div>
  );
}
