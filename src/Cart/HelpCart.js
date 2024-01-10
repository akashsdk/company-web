import React from "react";
import "./HelpCart.css";

import Image1 from "../Image/Business Idea Analysis.png";
import Image2 from "../Image/Evaluate Costing.png";
import Image3 from "../Image/Contract Signing1.png";
import Image4 from "../Image/We Build the project.png";

import {
  ArrowRightOutlined,
  ArrowDownOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

export default function HelpCart() {
  return (
    <div className="help-body">
      <p className="help-mainText">MVP Development Process</p>
      <p className="help-DetelsText">
        Our MVP development service follows the best practices of the agile
        development process. At our MVP development company, we follow a
        straightforward process to build MVP with the highest return on
        investment.
      </p>
      <div className="help-TopDiv">
        <div className="help-TopBox">
          <img src={Image1} className="help-TopBoxImg" alt="" />
          <p className="help-TopBoxText1">Business Idea Analysis</p>
          <p className="help-TopBoxText2">
            Analyze product idea, target market, and usability testing.
          </p>
          <div className="help-TopBoxDown">
            <p className="help-TopBoxText3">Step-1 </p>
            <ArrowRightOutlined className="help-TopBoxIcon1" />
            <ArrowDownOutlined className="help-TopBoxIcon2" />
          </div>
        </div>

        <div className="help-TopBox">
          <img src={Image2} className="help-TopBoxImg" alt="" />
          <p className="help-TopBoxText1">Evaluate Costing</p>
          <p className="help-TopBoxText2">
            Analyze product idea, target market, and usability testing.
          </p>
          <div className="help-TopBoxDown">
            <p className="help-TopBoxText3">Step-2 </p>
            <ArrowRightOutlined className="help-TopBoxIcon1" />
            <ArrowDownOutlined className="help-TopBoxIcon2" />
          </div>
        </div>

        <div className="help-TopBox">
          <img src={Image3} className="help-TopBoxImg" alt="" />
          <p className="help-TopBoxText1">Contract Signing</p>
          <p className="help-TopBoxText2">
            Analyze product idea, target market, and usability testing.
          </p>
          <div className="help-TopBoxDown">
            <p className="help-TopBoxText3">Step-3</p>
            <ArrowRightOutlined className="help-TopBoxIcon1" />
            <ArrowDownOutlined className="help-TopBoxIcon2" />
          </div>
        </div>

        <div className="help-TopBox">
          <img src={Image4} className="help-TopBoxImg" alt="" />
          <p className="help-TopBoxText1">Project Development</p>
          <p className="help-TopBoxText2">
            Analyze product idea, target market, and usability testing.
          </p>
          <div className="help-TopBoxDown">
            <p className="help-TopBoxText3">Step-3 </p>
            <CheckCircleOutlined className="help-TopBoxIcon1" />
            <CheckCircleOutlined className="help-TopBoxIcon2" />
          </div>
        </div>
      </div>

      <div className="helpMain-Box">
        <div className="helpMain-LeftBox">
          <p className="help-mainText">How can we help you</p>
          <p className="helpMain-LeftText1">
            If you need a partner to assist with the end to end development
            process, Our professional team is here to help you.
          </p>
          <div></div>
        </div>
        <div className="helpMain-RightBox">Right</div>
      </div>
    </div>
  );
}
