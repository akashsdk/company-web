import React from "react";
import "./Footer.css";
import { Button, Dropdown } from "antd";
import { CaretUpOutlined } from "@ant-design/icons";

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
      <div className="footer-Mdi">Mid</div>
      <div className="footer-Down-Line" />
      <div className="footer-Down">
        <p style={{marginLeft:'10px'}}>
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
            <button className="">
              <p>topRight</p>
              <CaretUpOutlined />
            </button>
          </Dropdown>
      </div>
    </div>
  );
}
