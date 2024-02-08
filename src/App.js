import React from "react";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import WrongPage from "./Screen/WrongPage";
import Home from "./Screen/Home";
import Header from "./Components/Header";
import Contacts from "./Screen/Contacts";
import AboutUs from "./Screen/AboutUs";
import Career from "./Screen/Career";
import Services from "./Screen/Services";
import Blog from "./Screen/Blog";
import CheckOut from "./Screen/CheckOut";

import TeamAugmentation from "./SemiScreen/TeamAugmentation";
import ProjectDevelopment from "./SemiScreen/ProjectDevelopment";
import OffshoreDev from "./SemiScreen/OffshoreDev";
import MVPServices from "./SemiScreen/MVPServices";

import TermsAndConditions from "./Others/TermsAndConditions";
import PrivacyPolicy from "./Others/PrivacyPolicy";
import CookiesPolicy from "./Others/CookiesPolicy";
import CopyrightPolicy from "./Others/CopyrightPolicy";

function App() {
  return (
    <BrowserRouter>
      <div>
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

          <Route path="/team-augmentation" element={<TeamAugmentation />} />
          <Route path="/project-development" element={<ProjectDevelopment />} />
          <Route path="/mvp-services" element={<MVPServices />} />
          <Route path="/offshore-development" element={<OffshoreDev />} />
          <Route
            path="/home/team-augmentation"
            element={<TeamAugmentation />}
          />
          <Route
            path="/home/project-development"
            element={<ProjectDevelopment />}
          />
          <Route path="/home/mvp-services" element={<MVPServices />} />
          <Route path="/home/offshore-development" element={<OffshoreDev />} />

          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/copyright-policy" element={<CopyrightPolicy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
