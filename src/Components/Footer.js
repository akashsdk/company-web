import React from "react";
import "./Footer.css";
import { Button, Dropdown } from "antd";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  HomeOutlined,
  AppstoreOutlined,
  ContactsOutlined,
  MacCommandOutlined,
  DesktopOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

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
  return (
    <div className="footer-Body">
      <div className="footer-Top">
        <h1>Icon and Name</h1>
      </div>
      <div className="footer-Mdi">
        <div>side</div>
        <div className="footer-Mdi-Box">
          <div className="footer-Mdi-box1">Box1</div>

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
            <p className="footer-MdiBox2-Text1">SOCIAL MEDIA</p>
            <div>
              <Link className="footer-Mdi-Link">
                hhh
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-Down-Line" />
      <div className="footer-Down">
        <p style={{ marginLeft: "10px" }}>
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
