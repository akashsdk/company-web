import React from "react";
import "./TeamAugmentation.css";
import ServicesCart from "../Cart/ServicesCart";

export default function TeamAugmentation() {
  return (
    <div className="AppBody">
      <div className="Team-Body">
        <ServicesCart
          text1="IT Staff Augmentation Services"
          text2="Get Expert Resources, Maximize Your Team Performance Through Augmentation Strategies"
          text3="Looking for top-tier IT staff augmentation services? (web site name) has you covered. We offer comprehensive team augmentation solutions with highly skilled personnel to help you grow and strengthen your team. From software developers to project managers, we have the expertise to elevate your business to the next level. Partner with (web site name) today and watch your team thrive."
        />
      </div>
    </div>
  );
}
