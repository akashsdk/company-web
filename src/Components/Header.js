import React, { useState } from "react";
import "./Header.css";

import { Button, Drawer, Space } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="header-body" >
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
            <Button shape="circle" onClick={onClose} icon={<CloseOutlined />} />
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

      {/* For mim size 1000 */}
      <div className="headerBox-1">Icon and name</div>
      <div className="headerBox-2">Link</div>
      <div className="headerBox-3">yyyy</div>
      </div>
      <div className="header-Line" />

    </div>
  );
}
