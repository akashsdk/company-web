import React, { useState } from "react";
import "./Footer.css";
import { Button, Dropdown, Tooltip, Drawer, Space } from "antd";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  HomeOutlined,
  AppstoreOutlined,
  ContactsOutlined,
  MacCommandOutlined,
  DesktopOutlined,
  CustomerServiceOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import icon1 from "../Icon/facebook.png";
import icon2 from "../Icon/instagram-new.png";
import icon3 from "../Icon/twitter-x-new.png";
import icon4 from "../Icon/whatsapp-nwe.png";
import icon5 from "../Icon/youtube.png";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

export default function Footer() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="footer-Body">
      <div className="footer-Top">
        <h1>Icon and Name</h1>
      </div>
      <div className="footer-Mdi">
        <div className="footer-Mdi-Box">
          <div className="footer-Mdi-box1">
            <div className="footer-Mdi-box1Div">
              <p className="footer-MdiBox2-Text1">Stay Connected</p>
              <p className="footer-MdiBox1-Text1">Web site name</p>
              <p className="footer-MdiBox1-Text1">Address:</p>
              <br />
              <p className="footer-MdiBox1-Text1">Email:</p>
            </div>
          </div>

          <div className="footer-Mdi-box2">
            <div className="footer-MdiBox2-Div">
              <p className="footer-MdiBox2-Text1">HELP</p>
              <Link className="footer-MdiBox2-Link">
                <ContactsOutlined className="footer-MdiBox2-Icon" />
                <p className="footer-MdiBox2-Text2">Authors</p>
              </Link>
              <Link className="footer-MdiBox2-Link">
                <HomeOutlined className="footer-MdiBox2-Icon" />
                <p className="footer-MdiBox2-Text2">FAQs</p>
              </Link>
              <Link className="footer-MdiBox2-Link">
                <AppstoreOutlined className="footer-MdiBox2-Icon" />
                <p className="footer-MdiBox2-Text2">Follow</p>
              </Link>
            </div>

            <div className="footer-MdiBox2-Div">
              <p className="footer-MdiBox2-Text1">COMPANY</p>
              <Link to="/" className="footer-MdiBox2-Link">
                <HomeOutlined className="footer-MdiBox2-Icon" />
                <p className="footer-MdiBox2-Text2">Home</p>
              </Link>
              <Link className="footer-MdiBox2-Link">
                <AppstoreOutlined className="footer-MdiBox2-Icon" />
                <p className="footer-MdiBox2-Text2">Services</p>
              </Link>
              <Link className="footer-MdiBox2-Link">
                <ContactsOutlined className="footer-MdiBox2-Icon" />
                <p className="footer-MdiBox2-Text2">Career</p>
              </Link>
              <Link className="footer-MdiBox2-Link">
                <MacCommandOutlined className="footer-MdiBox2-Icon" />
                <p className="footer-MdiBox2-Text2">Blog</p>
              </Link>
              <Link className="footer-MdiBox2-Link">
                <DesktopOutlined className="footer-MdiBox2-Icon" />
                <p className="footer-MdiBox2-Text2"> Contact</p>
              </Link>
              <Link className="footer-MdiBox2-Link">
                <CustomerServiceOutlined className="footer-MdiBox2-Icon" />
                <p className="footer-MdiBox2-Text2">About Us</p>
              </Link>
            </div>
          </div>

          <div className="footer-Mdi-box3">
            <p className="footer-MdiBox2-Text1">SUPPORT</p>
            <div className="footer-MdiA-Box">
              <PhoneOutlined className="footer-MdiA-Icon" />
              <div className="footer-MdiA-Line" />
              <p className="footer-MdiA-Text">015-80233165</p>
            </div>

            <p className="footer-MdiBox2-Text1">SOCIAL MEDIA</p>
            <div style={{ display: "flex", marginTop: "-15px" }}>
              <Tooltip placement="topLeft" title="Facebook" color="#316FF6">
                <Link className="footer-Mdi-Link">
                  <div className="footer-Mdi-IconDiv">
                    <img className="footer-Mdi-Icon" src={icon1} alt="" />
                  </div>
                </Link>
              </Tooltip>

              <Tooltip title="Instagram" color="#d62976">
                <Link className="footer-Mdi-Link">
                  <div className="footer-Mdi-IconDiv">
                    <img className="footer-Mdi-Icon" src={icon2} alt="" />
                  </div>
                </Link>
              </Tooltip>

              <Tooltip title="Twitter X" color="Black">
                <Link className="footer-Mdi-Link">
                  <div className="footer-Mdi-IconDiv">
                    <img className="footer-Mdi-Icon" src={icon3} alt="" />
                  </div>
                </Link>
              </Tooltip>

              <Tooltip title="What's App" color="#075E54">
                <Link className="footer-Mdi-Link">
                  <div className="footer-Mdi-IconDiv">
                    <img className="footer-Mdi-Icon" src={icon4} alt="" />
                  </div>
                </Link>
              </Tooltip>

              <Tooltip placement="topRight" title="YouTube" color="#FF0000">
                <Link className="footer-Mdi-Link">
                  <div className="footer-Mdi-IconDiv">
                    <img className="footer-Mdi-Icon" src={icon5} alt="" />
                  </div>
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-Mdi2-Box">
        <Link className="footer-Mdi2-Link">
          <p className="footer-Mdi2-Text">Terms and conditions </p>
        </Link>

        <Link className="footer-Mdi2-Link">
          <p className="footer-Mdi2-Text">Privacy policy  </p>
        </Link>

        <Link className="footer-Mdi2-Link">
          <p className="footer-Mdi2-Text">Cookies policy</p>
        </Link>

        <Link className="footer-Mdi2-Link">
          <p className="footer-Mdi2-Text">Copyright policy </p>
        </Link>

        <button onClick={showDrawer} className="footer-MdiSide-Button">
        <p className="footer-Mdi2-Text2">FeedBack </p>
        </button>
        <Drawer
          title="Feedback Form"
          placement='bottom'
          width={500}
          onClose={onClose}
          open={open}
          extra={
            <Space>
              <Button onClick={onClose} style={{ borderColor: "#fb6565" }}>
                Cancel
              </Button>
            </Space>
          }
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
      
      <div className="footer-Down-Line" />
      <div className="footer-Down">
        <p style={{ marginLeft: "20px", opacity: ".6" }}>
          Copyright &copy; {new Date().getFullYear()} name | All rights
          reserved.
        </p>
        <Dropdown
          menu={{
            items,
          }}
          placement="topRight"
          arrow
        >
          <button className="footer-Down-Button">
            <p className="footer-Down-Text2">English</p>
            <CaretUpOutlined className="footer-Down-Icon" />
            <CaretDownOutlined className="footer-Down-Icon2" />
          </button>
        </Dropdown>
      </div>
    </div>
  );
}
