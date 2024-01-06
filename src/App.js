import React, { useState } from "react";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import { BulbOutlined, SyncOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import sun from './Icon/sun.png';
import moon from './Icon/moon.png';

import WrongPage from "./Screen/WrongPage";
import Home from "./Screen/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contacts from "./Screen/Contacts";

function App() {
  const [theme, setTheme] = useState("dark");

  const handleDarkTheme = () => {
    setTheme("dark");
  };

  const handleLightTheme = () => {
    setTheme("light");
  };
  return (
    <BrowserRouter>
      <div className={theme}>
        <Header />
        <Routes>
          <Route path="*" element={<WrongPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
      <FloatButton.Group
        shape="circle"
        style={{
          right: 24,
        }}
      >
        <FloatButton onClick={handleDarkTheme} />
        <FloatButton onClick={handleLightTheme} icon={<BulbOutlined />} />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
    </BrowserRouter>
  );
}

export default App;
