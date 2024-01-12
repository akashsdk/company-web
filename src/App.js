import React, { useState } from "react";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import { FloatButton } from "antd";
import sun from "./Icon/sun.png";
import moon from "./Icon/moon.png";

import WrongPage from "./Screen/WrongPage";
import Home from "./Screen/Home";
import Header from "./Components/Header";
import Contacts from "./Screen/Contacts";
import AboutUs from './Screen/AboutUs';
import Career from './Screen/Career';
import Services from './Screen/Services';
import Blog from './Screen/Blog';
import CheckOut from './Screen/CheckOut';

import TeamAugmentation from './SemiScreen/TeamAugmentation';
import ProjectDevelopment from './SemiScreen/ProjectDevelopment';
import OffshoreDev from './SemiScreen/OffshoreDev';
import MVPServices from './SemiScreen/MVPServices';

function App() {
  const [theme, setTheme] = useState("light");

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
          <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Check-Out" element={<CheckOut />} />

          <Route path="/Team-Augmentation" element={<TeamAugmentation />} />
          <Route path="/Project-Development" element={<ProjectDevelopment />} />
          <Route path="/MVP-Services" element={<MVPServices />} />
          <Route path="/Offshore-Development" element={<OffshoreDev />} />
        </Routes>
      </div>
      <FloatButton.Group
        shape="circle"
        style={{
          right: 24,
        }}
      >
        {theme === "dark" ? (
          <FloatButton
            onClick={handleLightTheme}
            icon={
              <img
                style={{ height: "25px", marginLeft: "-3px" }}
                src={sun}
                alt=""
              />
            }
          />
        ) : (
          <FloatButton
            onClick={handleDarkTheme}
            icon={
              <img
                style={{ height: "25px", marginLeft: "-3px" }}
                src={moon}
                alt=""
              />
            }
          />
        )}

        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
    </BrowserRouter>
  );
}

export default App;
