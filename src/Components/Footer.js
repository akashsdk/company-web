import React, { useState } from "react";
import "./Footer.css";
import {
  Button,
  Dropdown,
  Tooltip,
  Drawer,
  Space,
  Input,
  notification,
} from "antd";
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

import img from "../Image/Feedback-removebg-preview.png";

const { TextArea } = Input;

// Dropdown
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/tasnimSakash/"
      >
        English
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/tasnimSakash/"
      >
        Bangla
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/tasnimSakash/"
      >
        Hindi
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

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Submit Successfully 🤗",
      description:
        "Dear Customer, Your feedback is very valuable to us and will be saved for our future development. Thank you 🥰",
    });
  };
  const openNotificationWithIcon2 = (type) => {
    api[type]({
      message: "Something Missing! 🤔",
      description:
        " Dear Customer, something is missing in this form, maybe a Name, Message, or Both. So, please try again! ",
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      text: "",
    });
  };

  const handleSend = () => {
    console.log("Form Data:", formData);

    if (formData.name === "" || formData.text === "") {
      setTimeout(() => {
        openNotificationWithIcon2("error");
      }, 1000);
    } else {
      setOpen(false);

      setTimeout(() => {
        openNotificationWithIcon("success");
      }, 2000);

      setFormData({
        name: "",
        email: "",
        text: "",
      });
    }
  };

  return (
    <div className="footer-Body">
      {contextHolder}
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
              <p className="footer-MdiBox2-Text1">COMPANY</p>
              <Link to="/" className="footer-MdiBox2-Link">
                <HomeOutlined className="footer-MdiBox2-Icon" />
                <p className="footer-MdiBox2-Text2">Home</p>
              </Link>

              <Link to="/career" className="footer-MdiBox2-Link">
                <ContactsOutlined className="footer-MdiBox2-Icon" />
                <p className="footer-MdiBox2-Text2">Career</p>
              </Link>

              <Link to="/blog" className="footer-MdiBox2-Link">
                <MacCommandOutlined className="footer-MdiBox2-Icon" />
                <p className="footer-MdiBox2-Text2">Blog</p>
              </Link>

              <Link to="/about-us" className="footer-MdiBox2-Link">
                <DesktopOutlined className="footer-MdiBox2-Icon" />
                <p className="footer-MdiBox2-Text2">About Us</p>
              </Link>

              <Link to="/contacts" className="footer-MdiBox2-Link">
                <CustomerServiceOutlined className="footer-MdiBox2-Icon" />
                <p className="footer-MdiBox2-Text2"> Contact</p>
              </Link>
            </div>

            <div className="footer-MdiBox2-Div">
              <p className="footer-MdiBox2-Text1">Service</p>
              <Link to="/team-augmentation" className="footer-MdiBox2-Link">
                <AppstoreOutlined />
                <p className="footer-MdiBox2-Text2">Team Augmentation</p>
              </Link>

              <Link to="/offshore-development" className="footer-MdiBox2-Link">
                <AppstoreOutlined className="footer-MdiBox2-Icon" />
                <p className="footer-MdiBox2-Text2">Offshore Development</p>
              </Link>

              <Link to="/mvp-services" className="footer-MdiBox2-Link">
                <AppstoreOutlined className="footer-MdiBox2-Icon" />
                <p className="footer-MdiBox2-Text2">MVP Service</p>
              </Link>

              <Link to="/project-development" className="footer-MdiBox2-Link">
                <AppstoreOutlined className="footer-MdiBox2-Icon" />
                <p className="footer-MdiBox2-Text2">End to End Development</p>
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
        <Link to="/terms-and-conditions" className="footer-Mdi2-Link">
          <p className="footer-Mdi2-Text">Terms and conditions </p>
        </Link>

        <Link to="/privacy-policy" className="footer-Mdi2-Link">
          <p className="footer-Mdi2-Text">Privacy policy </p>
        </Link>

        <Link to="/cookies-policy" className="footer-Mdi2-Link">
          <p className="footer-Mdi2-Text">Cookies policy</p>
        </Link>

        <Link to="/copyright-policy" className="footer-Mdi2-Link">
          <p className="footer-Mdi2-Text">Copyright policy </p>
        </Link>

        <button onClick={showDrawer} className="footer-MdiSide-Button">
          <p className="footer-Mdi2-Text2">FeedBack </p>
        </button>
        <Drawer
          title="Feedback Form"
          placement="bottom"
          width={500}
          height={500}
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
          <div className="footer-Drawer">
            <div className="footer-Drawer-Box">
              <div className="footer-Drawer-TextDiv">
                <p className="footer-Drawer-Text">Name:</p>
                <p className="footer-Drawer-Text2">*</p>
              </div>
              <Input
                placeholder="Your Name"
                allowClear
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="footer-Drawer-Input"
              />
              <p className="footer-Drawer-Text">Email:</p>
              <Input
                placeholder="Your Email Id"
                allowClear
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="footer-Drawer-Input"
              />
              <div className="footer-Drawer-TextDiv">
                <p className="footer-Drawer-Text">Message:</p>
                <p className="footer-Drawer-Text2">*</p>
              </div>

              <TextArea
                allowClear
                showCount
                maxLength={500}
                name="text"
                value={formData.text}
                onChange={handleInputChange}
                placeholder="Your FeedBack"
                style={{
                  height: 120,
                  resize: "none",
                }}
                className="footer-Drawer-TextArea"
              />
              <div className="footer-Drawer-ButtonDiv">
                <Button
                  className="footer-Drawer-Button"
                  onClick={handleReset}
                  danger
                >
                  Reset
                </Button>
                <Button
                  className="footer-Drawer-Button2"
                  onClick={handleSend}
                  type="primary"
                >
                  Submit
                </Button>
              </div>
            </div>
            <div className="footer-Drawer-Box2">
              <img className="footer-Drawer-Img" alt="" src={img} />
            </div>
          </div>
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
