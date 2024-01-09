import React, { useState } from "react";
import "./Contacts.css";

import Image1 from "../Image/Group-1000002614-1.png";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "male",
    message: "",
  });

  const { name, email, phone, gender, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      gender: "male",
      message: "",
    });
  };

  return (
    <div className="AppBody">
      <div className="contacts-Body">
        <div className="contacts-Left">
          <p className="contacts-Text1">Contact Us</p>
          <p className="contacts-Text2">
            Fill in the below form to receive a detailed estimation.
            <br />
            One of our friendly team member will be in touch soon
          </p>
          <div className="contacts-Box1">
            <div className="contacts-Box2">
              <p className="contacts-Text3">Name:</p>
              <p className="contacts-Text4">*</p>
            </div>
            <div className="contacts-Box3">
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                className="contacts-Input"
              />
            </div>
          </div>

          <div className="contacts-Box5">
            <div className="contacts-Box7">
              <div className="contacts-Box2">
                <p className="contacts-Text3">Email:</p>
                <p className="contacts-Text4">*</p>
              </div>
              <div className="contacts-Box6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="contacts-Input2"
                />
              </div>
            </div>

            <div className="contacts-Box7">
              <div className="contacts-Box2">
                <p className="contacts-Text3">Phone:</p>
              </div>
              <div className="contacts-Box6">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]*"
                  value={phone}
                  onChange={handleChange}
                  className="contacts-Input2"
                />
              </div>
            </div>
          </div>

          <div className="contacts-Box1">
            <div className="contacts-Box2">
              <p className="contacts-Text3">Services:</p>
              <p className="contacts-Text4">*</p>
            </div>
            <div className="contacts-Box3">
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={gender}
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="contacts-Box1">
            <div className="contacts-Box2">
              <p className="contacts-Text3">Message:</p>
              <p className="contacts-Text4">*</p>
            </div>
            <div className="contacts-Box4">
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleChange}
                className="contacts-textarea"
              />
            </div>
          </div>

          <div>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
            <button>Send</button>
          </div>
        </div>

        <div className="contacts-Right">
          <img className="contacts-Image" src={Image1} alt="" />
        </div>
      </div>

      <div></div>
    </div>
  );
}
