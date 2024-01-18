import React from "react";
import "./Blog.css";
import Footer from "../Components/Footer";

export default function Blog() {
  return (
    <div className="AppBody">
      <div className="Blog-Body">
        {/* Part-1 */}
        <div className="blogPart1-Body">
          <div className="blogPart1-left">left</div>
          <div className="blogPart1-right">right</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
