import React, { useState, useEffect } from "react";
import "./Index.css";

import Img1 from '../Image/Index Img 1.png';
import Img2 from '../Image/Index Img 5.png';
import Img3 from '../Image/Index Img 3.png';
import Img4 from '../Image/Index Img 4.png';

import Ivon from '../Icon/web icon red.png';

export default function Index() {
  const images = [Img4, Img2, Img3, Img1];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="index-Body">
      <div className="index-Left">
        <img alt="" className="index-Left-Icon" src={Ivon}/>
        <p className="index-Left-Text1">Build </p>
        <p className="index-Left-Text2">Your Dream</p>
        <p className="index-Left-Text3">With Us.</p>
        <p className="index-Left-Text4">"Explore Our Cutting-Edge Software Services and Propel Your Business into a Future of Technological Excellence."</p>
      </div>
      <div className="index-Right">
        <img alt="" className="index-Img" src={images[currentImage]} />
      </div>
    </div>
  );
}
