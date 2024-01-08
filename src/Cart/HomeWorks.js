import React from "react";
import "./HomeWorks.css";

import { ArrowRightOutlined } from "@ant-design/icons";

export default function HomeWorks(props) {
  return (
    <div className="HomeWorks-Body">
      <div className="HomeWorks-Div">
        <img className="HomeWorks-Img" src={props.img} alt="" />
        <p className="HomeWorks-Text1"> {props.text1}</p>
        <p className="HomeWorks-Text2">{props.text2}</p>
      </div>
      <div className="HomeWorks-Div2">
        <p className="HomeWorks-Text3">{props.text3}</p>
        <ArrowRightOutlined className="HomeWorks-Icon" />
      </div>
    </div>
  );
}
