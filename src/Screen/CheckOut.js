import React, { useState } from "react";
import "./CheckOut.css";

import Footer from "../Components/Footer";

import { CloseOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

export default function CheckOut() {
  // For Name Input
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsFocused(true);
  };

  const handleClearInput = () => {
    setInputValue("");
    setIsFocused(false);
  };
  // For e-mail Input
  const [inputValue2, setInputValue2] = useState("");
  const [isFocused2, setIsFocused2] = useState(false);

  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
    setIsFocused2(true);
  };

  const handleClearInput2 = () => {
    setInputValue2("");
    setIsFocused2(false);
  };

  // For Phone Input
  const [inputValue3, setInputValue3] = useState("");
  const [isFocused3, setIsFocused3] = useState(false);

  const handleInputChange3 = (e) => {
    setInputValue3(e.target.value);
    setIsFocused3(true);
  };

  const handleClearInput3 = () => {
    setInputValue3("");
    setIsFocused3(false);
  };
  // For Text Input
  const [inputValue4, setInputValue4] = useState("");
  const [isFocused4, setIsFocused4] = useState(false);

  const handleInputChange4 = (e) => {
    setInputValue4(e.target.value);
    setIsFocused4(true);
  };

  const handleClearInput4 = () => {
    setInputValue4("");
    setIsFocused4(false);
  };
  return (
    <div className="AppBody">
      <div className="CheckOut-Body">
        <div className="Check-Body">
          <p className="Check-HeaderText">Oder Now</p>
          <p className="Check-Text1">
            We can give you the best product at the lowest price. Our main goal
            is to provide you with good quality service. Hope you like our
            service, Thank you so much. 😊
          </p>
          <div className="Check-BodyBox">
            <div className="Check-Div">
              <p className="Check-Text2">Full Name:</p>
              <div
                className={`text-input-container ${isFocused ? "focused" : ""}`}
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="full name"
                  className="Check-Input"
                />
                {inputValue && (
                  <CloseOutlined
                    className="Check-InputIcon"
                    onClick={handleClearInput}
                  />
                )}
              </div>
            </div>

            <div className="Check-Div">
              <p className="Check-Text2">Email ID:</p>
              <div
                className={`text-input-container ${
                  isFocused2 ? "focused" : ""
                }`}
              >
                <input
                  type="text"
                  value={inputValue2}
                  onChange={handleInputChange2}
                  placeholder="email id"
                  className="Check-Input"
                />
                {inputValue2 && (
                  <CloseOutlined
                    className="Check-InputIcon"
                    onClick={handleClearInput2}
                  />
                )}
              </div>
            </div>

            <div className="Check-Div">
              <p className="Check-Text2">Phone Number:</p>
              <div
                className={`text-input-container ${
                  isFocused3 ? "focused" : ""
                }`}
              >
                <input
                  type="text"
                  value={inputValue3}
                  onChange={handleInputChange3}
                  placeholder="phone number"
                  className="Check-Input"
                />
                {inputValue3 && (
                  <CloseOutlined
                    className="Check-InputIcon"
                    onClick={handleClearInput3}
                  />
                )}
              </div>
            </div>

            <div className="Check-Div">
              <p className="Check-Text2">Message:</p>
              <div
                className={`text-input-container ${
                  isFocused4 ? "focused" : ""
                }`}
              >
                <textarea
                  type="text"
                  value={inputValue4}
                  onChange={handleInputChange4}
                  placeholder="Message"
                  className="Check-Input2"
                />
                {inputValue4 && (
                  <CloseOutlined
                    className="Check-InputIcon2"
                    onClick={handleClearInput4}
                  />
                )}
              </div>
            </div>

            

            <div style={{height:'50px'}}></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
